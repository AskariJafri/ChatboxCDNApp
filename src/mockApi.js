export const getChatMessages = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { text: 'Hello! How can I help you?', sent: false },
          { text: 'I need some information.', sent: true },
          { text: 'Sure, what information do you need?', sent: false },
        ]);
      }, 1000);
    });
  };
  