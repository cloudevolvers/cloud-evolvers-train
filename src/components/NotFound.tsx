import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, House, MagnifyingGlass, GraduationCap } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Card className="border-2 border-dashed border-muted-foreground/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-12 pb-10 px-8">
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center"
            >
              <MagnifyingGlass className="w-12 h-12 text-primary" weight="duotone" />
            </motion.div>

            {/* Error Code */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-8xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4"
            >
              404
            </motion.h1>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The page you're looking for doesn't exist or has been moved to a new location.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="group">
                <Link to="/">
                  <House className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/#training">
                  <GraduationCap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Browse Training
                </Link>
              </Button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-8 border-t border-muted-foreground/20"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  to="/training/azure-fundamentals"
                  className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                >
                  Azure Fundamentals (AZ-900)
                </Link>
                <Link
                  to="/training/azure-administrator"
                  className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                >
                  Azure Administrator (AZ-104)
                </Link>
                <Link
                  to="/#services"
                  className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default NotFound;
