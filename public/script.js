const socket=io();
$('#chat-div').hide();

$('#login-btn').click(()=>{
    const user=$('#login-inp').val();
    console.log(user);

    socket.emit('login',{
        user:user
    })

    $('#login-inp').val()
    $('#login').hide()
    $('#chat-div').show()
})

$('#send-btn').click(()=>{
    const msgText=$('#inp-msg').val();
    console.log(msgText)
    socket.emit('send-msg',{
        msg:msgText
    })

    $('#inp-msg').val("");
})

socket.on('recieved-msg',(data)=>{

    $('#chat').append(`<li><strong>${data.user}</strong>: ${data.msg} </li>`)
    $('#chat-box').scrollTop($('#chat-box').outerHeight())
})