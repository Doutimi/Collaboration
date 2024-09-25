async function TriggerNotification(){
    let res=await fetch("https://fcm.googleapis.com//v1/projects/notify-b3e63/messages:send",
    {
        method:"POST",
        credentials: 'include',
        headers:{
            "Content-Type": "application/json",
            "Authorization":"dTY31FVi3u19cbRaFD7Tx6:APA91bHJzKjv_eBnktKcGU1cXUOid20IDcEm9-DqTLnTmqW0ccCF92M-eQqQeMd5EB10kwzZ3z8W2dF3kvK5Q9IpkX1NtdudRQ3In5pmNDkVkLjdmcUh6VMIfAWJbmCFYqISxuBfyvDx"
        },
        
        body:JSON.stringify({
            "message": {
                "token": "dTY31FVi3u19cbRaFD7Tx6:APA91bHJzKjv_eBnktKcGU1cXUOid20IDcEm9-DqTLnTmqW0ccCF92M-eQqQeMd5EB10kwzZ3z8W2dF3kvK5Q9IpkX1NtdudRQ3In5pmNDkVkLjdmcUh6VMIfAWJbmCFYqISxuBfyvDx",
                "notification": {
                    "title": "Notify",
                    "body": "This is a sample message"
                },
                "webpush": {
                    "fcm_options": {
                    "link": "https://dummypage.com"
                    }
                }
            }
        })
    })

    if(res.ok) console.log("notification sent");
    console.log(res.status)
    try{
        console.log(await res.text())
    }
    catch(e){}

}

TriggerNotification().then(()=>console.log(""));