// Write a function displayNotifications(notifications) that displays valid messages
// sequentially (2s apart).​
// const notifications = ["Welcome!", "Profile updated", "New message received"]​  


function displayNotifications(notifications:string[]) {
  
    for(let i=0;i<notifications.length;i++) {
        setTimeout(()=>{
            console.log(notifications[i])
        },i * 2000)
    }
    
}

console.log(displayNotifications(['Welcome!','Profile updated','New message received']))