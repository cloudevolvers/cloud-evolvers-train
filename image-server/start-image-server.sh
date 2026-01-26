#!/bin/bash

# Cloud Evolvers Image Server Startup Script
# Usage: ./start-image-server.sh [start|stop|restart|status]

IMAGE_SERVER_DIR="/home/falk/repos/cloud-evolvers-train/image-server"
PID_FILE="$IMAGE_SERVER_DIR/image-server.pid"
LOG_FILE="$IMAGE_SERVER_DIR/image-server.log"
PORT=3001

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[Image Server]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[Image Server]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[Image Server]${NC} $1"
}

print_error() {
    echo -e "${RED}[Image Server]${NC} $1"
}

# Check if server is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            return 0
        else
            # PID file exists but process is not running
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start the server
start_server() {
    if is_running; then
        print_warning "Image server is already running (PID: $(cat $PID_FILE))"
        return 0
    fi
    
    print_status "Starting Cloud Evolvers Image Server..."
    
    # Change to image server directory
    cd "$IMAGE_SERVER_DIR" || {
        print_error "Failed to change to image server directory: $IMAGE_SERVER_DIR"
        exit 1
    }
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        print_status "Installing dependencies..."
        npm install
    fi
    
    # Start the server in background
    nohup node server.js > "$LOG_FILE" 2>&1 &
    PID=$!
    
    # Save PID to file
    echo $PID > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 2
    
    if is_running; then
        print_success "Image server started successfully!"
        print_success "PID: $PID"
        print_success "Port: $PORT"
        print_success "Log file: $LOG_FILE"
        print_success "Health check: http://localhost:$PORT/health"
        
        # Test the health endpoint
        if command -v curl > /dev/null 2>&1; then
            sleep 1
            print_status "Testing health endpoint..."
            if curl -s "http://localhost:$PORT/health" > /dev/null; then
                print_success "✅ Server is responding to requests"
            else
                print_warning "⚠️  Server started but not responding yet (may need a moment)"
            fi
        fi
    else
        print_error "Failed to start image server"
        if [ -f "$LOG_FILE" ]; then
            print_error "Check log file for details: $LOG_FILE"
            echo "Recent log entries:"
            tail -10 "$LOG_FILE"
        fi
        exit 1
    fi
}

# Stop the server
stop_server() {
    if ! is_running; then
        print_warning "Image server is not running"
        return 0
    fi
    
    PID=$(cat "$PID_FILE")
    print_status "Stopping Cloud Evolvers Image Server (PID: $PID)..."
    
    # Send TERM signal
    kill "$PID" 2>/dev/null
    
    # Wait up to 10 seconds for graceful shutdown
    for i in {1..10}; do
        if ! ps -p "$PID" > /dev/null 2>&1; then
            break
        fi
        sleep 1
    done
    
    # Force kill if still running
    if ps -p "$PID" > /dev/null 2>&1; then
        print_warning "Forcing server shutdown..."
        kill -9 "$PID" 2>/dev/null
    fi
    
    # Clean up PID file
    rm -f "$PID_FILE"
    
    print_success "Image server stopped successfully"
}

# Show server status
show_status() {
    if is_running; then
        PID=$(cat "$PID_FILE")
        print_success "Image server is running (PID: $PID)"
        print_status "Port: $PORT"
        print_status "Log file: $LOG_FILE"
        
        # Show recent log entries
        if [ -f "$LOG_FILE" ]; then
            echo ""
            echo "Recent log entries:"
            tail -5 "$LOG_FILE"
        fi
        
        # Test health endpoint
        if command -v curl > /dev/null 2>&1; then
            echo ""
            print_status "Health check:"
            curl -s "http://localhost:$PORT/health" | python3 -m json.tool 2>/dev/null || curl -s "http://localhost:$PORT/health"
        fi
    else
        print_warning "Image server is not running"
    fi
}

# Restart the server
restart_server() {
    print_status "Restarting Cloud Evolvers Image Server..."
    stop_server
    sleep 2
    start_server
}

# Show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        echo "=== Image Server Logs ==="
        tail -f "$LOG_FILE"
    else
        print_warning "Log file not found: $LOG_FILE"
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        restart_server
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the image server"
        echo "  stop    - Stop the image server"
        echo "  restart - Restart the image server"
        echo "  status  - Show server status and health"
        echo "  logs    - Show server logs (tail -f)"
        echo ""
        echo "Examples:"
        echo "  $0 start"
        echo "  $0 status"
        echo "  $0 logs"
        exit 1
        ;;
esac