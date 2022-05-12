var CMD_MSG_C2S_Conn_Client = 340003950,CMD_MSG_S2C_Conn_Client = -467585541,CMD_MSG_Conn_Down = 691372614,CMD_MSG_C2S_Regedit = -1221014720;
function WRITE_MSG_C2S_Conn_Client(o){
	var b=[];
	b=b.concat(write_int32(CMD_MSG_C2S_Conn_Client));
	b=b.concat(write_MSG_C2S_Conn_Client(o));
	return b;
}
function write_MSG_C2S_Conn_Client(o){
	var b=[];
	b=b.concat(write_int32(o.Fd));
	b=b.concat(write_string(o.Ip));
	b=b.concat(write_string(o.UserAgent));
	return b
}
function read_MSG_C2S_Conn_Client(b){
	var o={},r={};r.b=b;
	r=read_int32(r.b);
	o.Fd=r.o
	r=read_string(r.b);
	o.Ip=r.o
	r=read_string(r.b);
	o.UserAgent=r.o
	return {o:o,b:r.b}
}
function WRITE_MSG_S2C_Conn_Client(o){
	var b=[];
	b=b.concat(write_int32(CMD_MSG_S2C_Conn_Client));
	b=b.concat(write_MSG_S2C_Conn_Client(o));
	return b;
}
function write_MSG_S2C_Conn_Client(o){
	var b=[];
	b=b.concat(write_int32(o.Fd));
	return b
}
function read_MSG_S2C_Conn_Client(b){
	var o={},r={};r.b=b;
	r=read_int32(r.b);
	o.Fd=r.o
	return {o:o,b:r.b}
}
function WRITE_MSG_Conn_Down(o){
	var b=[];
	b=b.concat(write_int32(CMD_MSG_Conn_Down));
	b=b.concat(write_MSG_Conn_Down(o));
	return b;
}
function write_MSG_Conn_Down(o){
	var b=[];
	b=b.concat(write_int32(o.Fd));
	b=b.concat(write_int8(o.GroupId));
	return b
}
function read_MSG_Conn_Down(b){
	var o={},r={};r.b=b;
	r=read_int32(r.b);
	o.Fd=r.o
	r=read_int8(r.b);
	o.GroupId=r.o
	return {o:o,b:r.b}
}
function WRITE_MSG_C2S_Regedit(o){
	var b=[];
	b=b.concat(write_int32(CMD_MSG_C2S_Regedit));
	b=b.concat(write_MSG_C2S_Regedit(o));
	return b;
}
function write_MSG_C2S_Regedit(o){
	var b=[];
	b=b.concat(write_int8(o.GroupId));
	b=b.concat(write_int8(o.Serverid));
	b=b.concat(write_string(o.Key));
	b=b.concat(write_int64(o.Time));
	return b
}
function read_MSG_C2S_Regedit(b){
	var o={},r={};r.b=b;
	r=read_int8(r.b);
	o.GroupId=r.o
	r=read_int8(r.b);
	o.Serverid=r.o
	r=read_string(r.b);
	o.Key=r.o
	r=read_int64(r.b);
	o.Time=r.o
	return {o:o,b:r.b}
}
