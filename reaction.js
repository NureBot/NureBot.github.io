var elm = document.getElementById('Content') 
var abt = document.getElementById('about-command')
var ust = document.getElementById('usetage')
var bdr = document.getElementById('border')
var bdr2 = document.getElementById('border2')
var inp = '<h2>Bot Commands List</h2><br><br><div id="search"><input onkeyup="Find()" placeholder="Search Command..." type="text" id="si"><label for="si" class="sd"><img src="img/search.png"></label></div>'
var com = '<div class="border"><div class="prefix">Prefix is nr!</div></div><ul id="ListCom"><li><a onClick="ban()">ban</a></li><li><a onclick="kick()">kick</a></li><li><a onClick="mute()">mute</a></li><li><a onClick="clearing()">clear</a></li><li><a onClick="vote()">vote</a></li><li><a onClick="warn()">warn</a></li><li><a onClick="autosetup()">autosetup</a></li><li><a onClick="CreateChannel()">createchannel</a></li><li><a onClick="help()">help</a></li><li><a onClick="pinging()">ping</a></li><li><a onClick="botinfo()">botinfo</a></li><li><a onClick="ServerInfo()">serverinfo</a></li><li><a onClick="captcha()">captcha</a></li><li><a onClick="verify()">verify</a></li><li><a onClick="work()">work</a></li><li><a onClick="balance()">balance</a></li><li><a onClick="buy()">buy</a></li><li><a onClick="promocode()">usepromocode</a></li><li><a onClick="earn()">earn</a></li></ul>'

function About() {
	elm.innerHTML='<h1>About Bot</h1> <br> <p style="color:#FFF; width: 300px; margin: 0 auto;">A bot whoch is in progress with quite lot commands. Helpfull for new discord server which help to set up it. Custom bot moneys <b>Nurelars</b>. Official discord server for better contact with developer, promocode for more Nurelars every mounth. Invite bot to ur server.</p>'
	abt.innerHTML=''
	ust.innerHTML=''
	dbdr2.innerHTML=''
}

function BotCom() {
	elm.innerHTML=inp + com;
}

function ban() {
	ust.innerHTML='Usetage: <br> nr!ban [user] [reason]'
	abt.innerHTML='Ban mentioed user'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function kick() {
	ust.innerHTML='Usetage: <br> nr!kick [user] [reason]'
	abt.innerHTML='Kick mentioned user'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function mute() {
	ust.innerHTML='Usetage: <br> nr!mute [user] [reason]'
	abt.innerHTML='Mute mentioned user[make sure that u have <i><b>Muted</b></i> role]'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function clearing() {
	ust.innerHTML='Usetage; <br> nr!clear [number of messages]'
	abt.innerHTML='Clear messages'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function vote() {
	ust.innerHTML='Usetage: <br> nr!vote [question]'
	abt.innerHTML='Create a voting'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function warn() {
	ust.innerHTML='Usetage: <br> nr!warn [user] [reason]'
	abt.innerHTML='Warn mentioned user'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function mute() {
	ust.innerHTML='Usetage: <br> nr!mute [user] [reason]'
	abt.innerHTML='Mute mentioned user[make sure that u have <i><b>Muted</b></i> role]'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function autosetup() {
	ust.innerHTML='Usetage: <br> nr!autosetup'
	abt.innerHTML='Create all needed channels and roles'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function CreateChannel() {
	ust.innerHTML='Usetage: <br> nr!createchannel [name] [text or voice] [category id]'
	abt.innerHTML='Create a channel'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function help() {
	ust.innerHTML='Usetage: <br> nr!help'
	abt.innerHTML='Send link to this WebPage'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function pinging() {
	ust.innerHTML='Usetage: <br> nr!ping'
	abt.innerHTML='Send ping of bot'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function botinfo() {
	ust.innerHTML='Usetage: <br> nr!botinfo'
	abt.innerHTML='Send information about bot'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function ServerInfo() {
	ust.innerHTML='Usetage: <br> nr!serverinfo'
	abt.innerHTML='Send all information about server'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function captcha() {
	ust.innerHTML='Usetage: <br> nr!captcha'
	abt.innerHTML='Send ur captcha code for verification'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function verify() {
	ust.innerHTML='Usetage: <br> nr!verify [Ur captcha code]'
	abt.innerHTML=" Verify u that ur account isn't a bot"
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function work() {
	ust.innerHTML='Usetage: <br> nr!work'
	abt.innerHTML='Work every 6 hours to earn Nurelars(game money)'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function balance() {
	ust.innerHTML='Usetage: <br> nr!balance or nr!bal'
	abt.innerHTML='Show ur balance'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function buy() {
	ust.innerHTML='Usetage: <br> nr!buy [item] or nr!buy list (to see all items which u can buy)'
	abt.innerHTML='U can  buy items like: <ul><li>cafe(more earnings)</li><li>Shop(more earnings)</li><li><i>More will be added soon</i></li></ul>'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function promocode() {
	ust.innerHTML='Usetage: <br> nr!promocode [promocode]'
	abt.innerHTML='Run promocode from developer which will be activated evry mounth'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}

function earn() {
	ust.innerHTML='Usetage: <br> nr!earn [ur buisness]'
	abt.innerHTML='Take earning from ur buisness'
	bdr.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
	bdr2.style.background='linear-gradient(45deg, #1b6cff, #c324ff)'
}