<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chat Session</title>
      <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <link rel="stylesheet" href="font-awesome-animation.min.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="bootstrap.min.css">
    <!--Poppins font-->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 h-100v p-0">
                <div class="top-element">
                    <div class="top-bar">
                        <div class="user-avatar">
                            <img src="female.jpg" alt="user-avatar" class="user-avatar-img">
                        </div>

                        <div class="input-group border rounded-pill p-1 custom-search">
                            <div class="input-group-prepend border-0">
                                <button id="button-addon4" type="button" class="btn btn-link"><i class="fa fa-search"></i></button>
                            </div>
                            <input type="search" placeholder="Search people" aria-describedby="button-addon4" class="form-control bg-none border-0">
                        </div>
                    </div>
                    <div class="bottom-bar">
                        <div class="controls">
                            <ul class="control-list">
                                <li><i class="fa fa-cog faa-spin animated-hover"></i></li>
                                <li><i class="fas fa-video"></i></li>  
                                <li><i class="fas fa-magic"></i></li>   
                                <li><i class="fas fa-microphone-alt"></i></li>  
                                <li id="end-call"><i class="fas fa-phone"></i></li>   
                            </ul>
                        </div>
                        <div class="side-chat">
                            <div class="side-chat-head">
                                <span class="side-chat-body-toggle">Everyone <i class="fa fa-chevron-down"></i></span><span><i class="fa fa-ellipsis-h"></i></span>
                            </div>
                            <div class="side-chat-body hide">
                                <div class="messages">
                                    <div class="d-flex justify-content-start mb-4">
                                        <div class="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
                                        </div>
                                        <div class="msg_cotainer">
                                            Hi, how are you samim?
                                            <span class="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-4">
                                        <div class="msg_cotainer_send">
                                            Hi Maryam i am good tnx how about you?
                                            <span class="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div class="img_cont_msg">
                                            <img src="data:image/jpeg;base64,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" class="rounded-circle user_img_msg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="side-chat-form-area">
                                <form class="chat-form">
                                    <textarea class="form-control rounded-pill" placeholder="Send a chat..." rows="1" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 37px;"></textarea>
                                    <div class="chat-form-buttons">
                                        <div class="emoji">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 58.967 35.54"><defs>
                                            <style>.a{fill:none;stroke:#ffc963;stroke-width:2px;}.b{fill:#444053;}.c,.f{opacity:0.1;}.d{fill:url(#a);}.e{fill:url(#b);}.f{fill:#6c63ff;}.g{fill:#ffd037;}</style>
                                            <linearGradient id="a" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="gray" stop-opacity="0.251"/><stop offset="0.54" stop-color="gray" stop-opacity="0.122"/><stop offset="1" stop-color="gray" stop-opacity="0.102"/></linearGradient><linearGradient id="b" x1="0.5" y1="1.039" x2="0.5" y2="0.047" xlink:href="#a"/></defs><g transform="translate(0 1)"><path class="a" d="M16.77,0A16.77,16.77,0,1,1,0,16.77,16.77,16.77,0,0,1,16.77,0Z" transform="translate(10.83)"/><ellipse class="b" cx="1.739" cy="2.278" rx="1.739" ry="2.278" transform="translate(21.15 9.176)"/><ellipse class="b" cx="1.739" cy="2.278" rx="1.739" ry="2.278" transform="translate(30.136 9.176)"/><path class="b" d="M.531,0S10.437,4.692,18.76.132c0,0,1.019,0,.323,2.506a3.745,3.745,0,0,1-.761,1.519c-1.6,1.745-7.545,6.9-17.042.325A3.933,3.933,0,0,1,.048,1.794C-.062.934-.014.119.531,0Z" transform="translate(17.902 17.241) rotate(-3)"/><path class="c" d="M855.67,534.71s.533.256.576.561S855.67,534.71,855.67,534.71Z" transform="translate(-812.289 -517.92)"/><path class="c" d="M749.31,635.29c0,.264-.048,1.105.167,1.2S749.31,635.29,749.31,635.29Z" transform="translate(-711.705 -613.032)"/><path class="c" d="M700.54,675.3a1.844,1.844,0,0,1,1.551-.354A3.576,3.576,0,0,0,700.54,675.3Z" transform="translate(-665.592 -650.465)"/><path class="c" d="M718.11,679.791a8.494,8.494,0,0,0,.966.254A2.408,2.408,0,0,0,718.11,679.791Z" transform="translate(-682.207 -655.107)"/><path class="d" d="M255.091,322.585l-.061-.045a.13.13,0,0,1,.025.043Z" transform="translate(-244.3 -317.284)"/><path class="e" d="M252.769,321.19h.036l-.034-.026h.009l-.061-.045a.131.131,0,0,1,.024.042h.014A.121.121,0,0,1,252.769,321.19Z" transform="translate(-242.115 -315.941)"/><path class="c" d="M255.2,325.575l-.059-.045a.129.129,0,0,1,.024.042Z" transform="translate(-244.404 -320.111)"/><path class="c" d="M331.936,455.74s-.179.375-.473.448S331.936,455.74,331.936,455.74Z" transform="translate(-316.514 -443.243)"/><ellipse class="f" cx="1.464" cy="0.247" rx="1.464" ry="0.247" transform="translate(56.039 29.171)"/><ellipse class="f" cx="1.464" cy="0.247" rx="1.464" ry="0.247" transform="translate(8.747 33.595)"/><path class="c" d="M60.994,720.81a.492.492,0,0,0-.061.122c-.523.614-.8,1.188-.3,1.2.469.013,1.033.851,1.165,1.062,0,.016-.01.032-.016.048,0,0-.658-1.095-1.2-1.11S60.4,721.468,60.994,720.81Z" transform="translate(-60.176 -693.904)"/><path class="g" d="M62.47,728.456c0,.138.015.249.035.249s.034-.109.034-.249-.02-.072-.039-.072S62.47,728.316,62.47,728.456Z" transform="translate(-62.207 -701.05)"/><path class="g" d="M57.709,731.365c.121.066.226.105.235.089s-.082-.084-.2-.15-.073-.018-.082,0S57.587,731.3,57.709,731.365Z" transform="translate(-57.635 -703.796)"/></g>
                                        </svg>
                                        </div>
                                        <div class="custom-file custom-file-naked">
                                        <input type="file" class="custom-file-input d-none" id="customFile">
                                        <label class="custom-file-label file-label" for="customFile">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25.817 32.27"><defs><style>.aa{fill:#6c63fc;}</style></defs><g transform="matrix(0.899, 0.438, -0.438, 0.899, -9.192, -32.322)"><path class="aa" d="M46.457,26.029V41.046a5.352,5.352,0,0,1-10.7,0V24.724a3.345,3.345,0,0,1,6.688,0V38.434a1.338,1.338,0,0,1-2.675,0V26.029H37.763V38.434a3.345,3.345,0,0,0,6.687,0V24.724a5.352,5.352,0,0,0-10.7,0V41.046a7.359,7.359,0,0,0,14.713,0V26.029Z"/></g></svg>
                                        </label>
                                        </div>
                                        <div class="btn-send">
                                            <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31.434 26.361"><defs><style>.aa{fill:#6c63fc;}</style></defs><path class="aa" d="M337.909,430.16,325,459.943l1.205,1.205,11.707-5.164,11.707,5.164,1.205-1.2Z" transform="translate(467.2 -316.902) rotate(91)"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="grid-container">
                    <div class="grid-element"><img src="user1.png" alt="user" > </div>
                    <div class="grid-element"><img src="user2.png" alt="user" ></div>
                    <div class="grid-element"><img src="user3.png" alt="user" ><span class="user-mute-icon"><i class="fas fa-microphone-alt-slash"></i></span></div>
                    <div class="grid-element"><img src="user4.png" alt="user" ></div>
                    <div class="grid-element"><img src="user5.png" alt="user" ></div>
                    <div class="grid-element"><img src="user6.png" alt="user" ></div>
                </div>
                

            </div>
        </div>
    </div>
</body>
<style>
    body{
        font-family: 'Poppins', sans-serif;
    }
    * { box-sizing: border-box; }

    .h-100v{
        height: 100vh;
    }
    .controls{
        width: fit-content;
        margin: auto;
    }
    .control-list{
        list-style: none;
        display: flex;
        /* background-color: #0288D1; */
        color: #fff;
        padding: 0px;
        margin: 0px;
        border-radius: 0.25rem;
    }
    .control-list li{
        width: 4rem;
        height: 4rem;
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.25rem;
    }
    .control-list li:first-of-type{
        /* background-color: #01579B; */
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .control-list li#end-call{
        transform: rotate(197deg);
        color: #F44336;
    }
    .grid-container {
        display: grid;
        height: 100vh;
        grid-template-columns: repeat(auto-fit, minmax(33.33%, 1fr));
    }
    .grid-element{
        background-color:rgba(133, 133, 133, 0.7);
        color: #fff;
        border: 1px solid #fff;
        height: 100%;
        overflow: hidden;
        
        z-index: 0;
        position: relative;
    }
    .grid-element img{
        max-width: 100%;
        min-width: 100%;
        height: auto;
    }
    .user-mute-icon{
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 10px;
        width: 10px;
        font-size: 2em;
        color:#F44336;
    }
    .top-element{
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 5;
    }
    .top-bar{
        width: 100%;
        height: 70px;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
    }
    .bottom-bar{
        width: 100%;
        height: 100px;
        display: flex;
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .user-avatar-img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #fff;
    }
    .custom-search input{
        background: transparent !important;
        border-top-right-radius: 50rem;
        border-bottom-right-radius: 50rem;
    }
    .custom-search input::placeholder{
        color: #fff;
    }
    .custom-search input:focus{
        box-shadow: unset;
        color: gray;
    }
    .custom-search{
        width:240px;
        padding: 0 !important;
        align-self: center;
        background-color: rgba(7, 10, 47, 0.56);
        color: rgba(7, 10, 47, 1);
    }
    .custom-search .btn{
        color:  rgba(7, 10, 47, 1);
    }
    .side-chat{
        width: 300px;
        height: auto;
        position: absolute;
        bottom: 10px;
        right: 20px;
        background-color: rgba(133, 133, 133, 0.7);
        border-radius: 1rem;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .side-chat.body-open{
        background-color: #1f1c50;
    }
    .side-chat-head{
        color: #fff;
        padding: 5px 20px;
        display: flex;
        justify-content: space-between;
        font-weight: 300;
    }
    .side-chat-body{
        width: 100%;
        height: 300px;
        margin: 10px 0px;
        transition:  all 1s ease-in-out ;
    }
.chat-form textarea {
  padding-right: 5.375rem;
  padding-left: 1rem;
  font-size: 0.8rem;
  border: #fff;
}
.chat-form-buttons {
  position: absolute;
  bottom: 3px;
  right: 0.25rem;
  display: flex;
  align-items: center;
  height: 37px;
}
.chat-form-buttons button {
  padding: 0;
}
.chat-form-buttons .custom-file-naked {
  width: 1.5rem;
  margin-left: 0.175rem;
  margin-right: 0.375rem;
  height: 24px;
}
.custom-file-naked {
  cursor: pointer;
  width: auto;
  height: auto;
}
.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.875rem + 2px);
  margin-bottom: 0;
}
.custom-file-naked .custom-file-input {
  height: auto;
  cursor: pointer;
}
.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.875rem + 2px);
  margin: 0;
  opacity: 0;
}
.custom-file-naked .custom-file-label {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  height: auto;
  cursor: pointer;
}
.custom-control-label::before, .custom-file-label, .custom-select {
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.custom-file-label {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: calc(1.5em + 0.875rem + 2px);
    padding: 0.4375rem 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
}
.chat-form-buttons i {
  color: #6C63FC;
  font-size: 1rem;
  cursor: pointer;
}
.side-chat-body-toggle{
    cursor: pointer;
}
.btn-send{
    margin-right: calc( 0.375rem * 2 );
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: '';
  opacity: 0;
}
.hide{
    display: none;
}
.show{
    display: block;
}
.img_cont_msg {
    height: 40px;
    width: 40px;
}
.user_img_msg {
    height: 40px;
    width: 40px;
    border: 1.5px solid #f5f6fa;
}
.msg_cotainer {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    border-radius: 25px;
    background-color: #03A9F4;
    padding: 10px;
    position: relative;
}
.msg_time {
    position: absolute;
    left: 0;
    bottom: -15px;
    color: rgba(255,255,255,0.5);
    font-size: 10px;
}
.msg_cotainer_send {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    border-radius: 25px;
    background-color: #2196F3;
    padding: 10px;
    position: relative;
}
.msg_time_send {
    position: absolute;
    right: 0;
    bottom: -15px;
    color: rgba(255,255,255,0.5);
    font-size: 10px;
}

</style>

<!-- JQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="bootstrap.min.js"></script>
<!-- MDB core JavaScript -->

<script>
    let chatToggle = document.querySelector('.side-chat-body-toggle');
    chatToggle.addEventListener('click',()=>{
        let target = document.querySelector('.side-chat-body');
        let parent = document.querySelector('.side-chat')
        target.classList.toggle('hide');
        target.classList.toggle('show');
        if(target.classList.contains('show')){
            parent.classList.add('body-open');
        }else{
            parent.classList.remove('body-open');
        }

    });

</script>
</html>