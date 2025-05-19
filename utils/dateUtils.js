// utils/dateUtils.js
export function getRemainingTime(remindertime) {
    const remindDate = new Date(remindertime);
    const now = new Date();
  
    const diffInMs = remindDate - now;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  
    if (diffInDays > 7) {
      const weeks = Math.floor(diffInDays / 7);
      return `${weeks} week${weeks > 1 ? 's' : ''} remaining`;
    } else if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} remaining`;
    } else if (diffInDays === 0) {
      return 'Today!';
    } else {
      return 'Expired';
    }
  }
  