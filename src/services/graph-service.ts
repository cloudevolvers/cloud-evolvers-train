
// Mock GraphService to fix build errors
export const GraphService = {
    getClient: async () => {
        return null;
    },
    getUser: async () => {
        return { displayName: 'Mock User' };
    },
    getPhoto: async () => {
        return null;
    },
    sendContactEmail: async (data: any) => {
        console.log('Sending email:', data);
        return true;
    }
};
