const adminEmails = ["njrgourav@gmail.com.com"]; // Add admin emails here

export const isAdmin = (user) => {
  return user && adminEmails.includes(user.email);
};
