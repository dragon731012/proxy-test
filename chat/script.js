// PS! Replace this with your own channel ID
// If you use this channel ID your app will stop working in the future
const CLIENT_ID = 'm3BAnyjnCGqgWZye';
const banlist=["bannednametest123456","paxton loves sex","nill kiggers"];
const ownerlist=["Matteo"];
const adminlist=["Nate","Pax"];
const coadminlist=["Yoga"];
function get_cookie(cookie_name) { const value = "; " + document.cookie; const parts = value.split("; " + cookie_name + "="); if (parts.length === 2) return parts.pop().split(";").shift(); }
const drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
    name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('Successfully joined room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);
    updateMembersDOM();
  });

  room.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
});

drone.on('error', error => {
  console.error(error);
});

function getRandomName() {
    var name=get_cookie("name");
    var banned=banlist.includes(name);
    if (banned==true){
	document.cookie="banned=yes; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	  
  }
   else{	
	   document.cookie="banned=no; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	  
   }
  var bannedcookie=get_cookie("banned");
  if (bannedcookie=="yes"){
        history.back();
        function spam(){
            alert("you have been banned.");
        }
        setInterval(spam,5);
  }
  else{
	  var change=prompt("do you want to change your username? 0=no 1=yes");
	  if (change==0){
		  var name=get_cookie("name");
		
		  if (name == null) {
			name=prompt("what is your new username?");
			    var owner=ownerlist.includes(name);
			    var admin=adminlist.includes(name);
			    var coadmin=coadminlist.includes(name);
			    if (admin==true){
				var try1=prompt("what is the password for this account?");
				var pass="thisisagreatpassword12130183113098313108913098313113293923";
				if (try1==pass){
					name="admin: "+name;
				} 
			    }
			    else if (coadmin==true){
				var try1=prompt("what is the password for this account?");
				var pass="efewiufhweoi7er34try43t34hf944wt34t34";
				if (try1==pass){
					name="co-admin: "+name;
				} 
			    }
			    else if (owner==true){
				var try1=prompt("what is the password for this account?");
				var pass="efewiufhweoi7er34try43ewfewgfwgegwegrgfsrgsrgt34hf944wt34t34";
				if (try1==pass){
					name="owner: "+name;
				} 
			    }
			    else{
				name="member: "+name;
			    }
		  }
		  document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
		  var owner=ownerlist.includes(name);
		  var admin=adminlist.includes(name);
		  var coadmin=coadminlist.includes(name);
		    if (admin==true){
			document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
			name="admin: "+name;
		    } 
		    else if (coadmin==true){
				document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
				name="co-admin: "+name;
			
			    }
		    	    else if (owner==true){
				document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
			        name="owner: "+name;
			    }
		    else{
			document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
			name="member: "+name;
		    }
		  return name;
	  }
	  if (change==1){
	    name=prompt("what is your new username?");
	    if (name=="admin: Matteo"){
		alert("please pick a different username.");
	    	window.location.reload(1);
	    }
	    if (name=="owner: Matteo"){
		alert("please pick a different username.");
	    	window.location.reload(1);
	    }
	    if (name=="Owner: Matteo"){
		alert("please pick a different username.");
	    	window.location.reload(1);
	    }
	    const hasWord = (str, word) => 
  	    	str.replace(/[ .,  \   /#!    $%     \^&\qwertyuiopasdfghjklzxcvbnm*@{}='"?><+\-_`~(|)]/g,"").split(/\s+/).includes(word);
	    
	    var name2=hasWord(name,":");
	    if (name2==true){
	    	alert("please try not to include : or ; in your name.");
		    window.location.reload(1);
	    }
		  
            var owner=ownerlist.includes(name);
	    var admin=adminlist.includes(name);
	    var coadmin=coadminlist.includes(name);
  	    if (admin==true){
		var try1=prompt("what is the password for this account?");
		var pass="thisisagreatpassword12130183113098313108913098313113293923";
		if (try1==pass){
			document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
	    		name="admin: "+name;
		} 
	    }
	  
	    else if (coadmin==true){
				var try1=prompt("what is the password for this account?");
				var pass="efewiufhweoi7er34try43t34hf944wt34t34";
				if (try1==pass){
					name="co-admin: "+name;
				} 
			    }
	    else if (owner==true){
				var try1=prompt("what is the password for this account?");
				var pass="efewiufhweoi7er34try43ewfewgfwgegwegrgfsrgsrgt34hf944wt34t34";
				if (try1==pass){
					name="owner: "+name;
				} 
			    }
	    else{
		document.cookie="name="+name+"; expires=Thu, 18 Dec 9013 12:00:00 UTC"; 	
	    	name="member: "+name;
	    }
	    return name;
	  }
	}
}

function getRandomColor() {
  var name=get_cookie("name");
  var owner=ownerlist.includes(name);
  var admin=adminlist.includes(name);
  var coadmin=coadminlist.includes(name);
  if (owner==true){
	  return '#0000FF';
  }
  if (admin==true){
	  return '#0000FF';
  }
  if (coadmin==true){
	  return '#0000FF';
  }
  else{
      return '#808080';
  }
}

//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
};

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
  const swearlist=["sex","fuck","bitch","balls","cock","penis","porn","ass","dumbass","retard","cubs","pussy","segs","puusy","cub","dickhead","dick","shit","suck","retarded","https//:pornhub.com","https//:pornhub.com/","deez","nuef","nerf","daddy","mommy","https://pornhub.com","https://pornhub.com/","fuck u","meth","cocaine","nigger","niger","damn","damnit","🍑🥵🍆","f u c k u","fuc k u","b i t c h","🥵🍆🍑","FUCKING","fucking","nuts","simp"];
  const value = DOM.input.value;
  var value1=value;
  const hasWord = (str, word) => 
  	str.replace(/[ .,  \   /#!    $%     \^&\*@;:{}='"?><+\-_`~(|)]/g,"").split(/\s+/).includes(word);
  
	
  var x=0;
  var xmax=swearlist.length;
  while (x<xmax){
	var sweartest=value1.toLowerCase();
	value1=sweartest.replace(swearlist[x], "####");
	var sweartest2=value1.replace(" ","");
	sweartest2=value1.replace(":","");
	sweartest2 = sweartest2.replace(/[&\/  =^   \    \#     ,+      (-)       $~%.'":*?<>{}]/g, '');
	if (sweartest2.includes(swearlist[x])){
		value1="########";
	}
	x=x+1;
  }
  const value2=value1;

	  if (value2 === '') {
	    return;
	  }
	  DOM.input.value = '';
	  drone.publish({
	    room: 'observable-room',
	    message: value2,
	  });
  
}

function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name));
  el.className = 'member';
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users in room:`;
  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

function createMessageElement(text, member) {
  const el = document.createElement('div');
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
