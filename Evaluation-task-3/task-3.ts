// Write a function formatTimeAgo(timestamp) that:
// Returns a human-readable “time ago” string that describes how long ago the given
// timestamp occurred (e.g., “5 minutes ago”, “2 hours ago”, “Yesterday”, “3 days ago”).
// Use Date object.

function formatTimeAgo(timestamp: Date) {
  const today = new Date();

  if (Math.abs(timestamp.getFullYear() - today.getFullYear()) >= 1) {
    return `${Math.abs(
      timestamp.getFullYear() - today.getFullYear()
    )} Year ago`;
  } else if (Math.abs(timestamp.getMonth() - today.getMonth()) > 0) {
    return `${Math.abs(timestamp.getMonth() - today.getMonth())} Months ago`;
  } else if (Math.abs(timestamp.getDate() - today.getDate()) > 1) {
    return `${Math.abs(timestamp.getDate() - today.getDate())} Days ago`;
  } else if (Math.abs(timestamp.getDate() - today.getDate()) === 1) {
    return "Yesterday";
  } else if (Math.abs(timestamp.getHours() - today.getHours()) > 0) {
    return `${Math.abs(timestamp.getHours() - today.getHours())} hours ago`;
  } else {
    return `${Math.abs(
      timestamp.getMinutes() - today.getMinutes()
    )} Minutes ago`;
  }
}



console.log(formatTimeAgo(new Date("2025-10-11")))
console.log(formatTimeAgo(new Date("2025-10-12")))
console.log(formatTimeAgo(new Date("2025-07-12")))
console.log(formatTimeAgo(new Date("2025-11-15")))



