function FormValidation()
{
    var username1=document.registration.username;
    var password1=document.registration.password;
    var email1=document.registration.email;
    var address1=document.registration.address;

    

    if(username(username1,5,15))
    {
        if(password(password1,5,15))
        {
            if(email(email1))
            {
                if(address(address1))
                {

                }
            }
        }

    }
    return false;
}

function username(username1,mn,mx)
{
    var username_len=username1.value.length;
    if(username_len==0||username_len<=mn||username_len>=mx)
    {
    alert("Username Should not be Empty/Username should be 5 to 15 characaters");
     username1.focus();
    return false;
    }
return true;
}

function password(password1,mn,mx)
{
    var password_len=password1.value.length;
    if(password_len==0||password_len<=mn||password_len>=mx)
    {
    alert("Username Should not be Empty/Username should be 5 to 15 characaters");
    password1.focus();
    return false;
    }
    return true;
}


function email(email1){
    var email2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email1.value.match(email2))
    {
        return true;
    }
    alert("Enetr a Valid Email");
    email1.focus();
    return false;
}
function address(address1)
{
    var add=/^[0-9a-zA-Z]+$/;
    if(address1.value.match(add))
    {
        alert("form successfully submitted");
        window.location.reload()
        return true;
    }
    return false;
}

// var p1=new Promise(function(resolve,reject){
// 	var num=Math.random();
// 	if(num<0.6){
// 	resolve(num);
// 	}
// 	else{
// 	reject(num);
// 	}
// });
// 	p1.then(function(result){
// 	console.log("success:"+result);
//     });
//     p1.then(function(result){
//         console.log("success2:"+result);
//         });
//         p1.then(function(result){
//             console.log("success3:"+result);
//             });
//             p1.then(function(result){
//                 console.log("success4:"+result);
//                 });
//                 p1.then(function(result){
//                     console.log("success5:"+result);
//                     });
    
// 	p1.catch(function(result){
// 	console.log("Reject:"+result);
// 	});
