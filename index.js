var lable=createlabels("label","for","firstname","First Name");
var br1=createlinebreak("br");
var input=createinput("input","type","firstname","id","firstname");
var br2=createlinebreak("br");
var mlable=createlabels("label","for","midlename","Middle Name");
var br3=createlinebreak("br");
var minput=createinput("input","type","middlename","id","middlename");
var br4=createlinebreak("br");
var llable=createlabels("label","for","lastname","Last Name");
var br5=createlinebreak("br");
var linput=createinput("input","type","lastname","id","lastname");
var br6=createlinebreak("br");
var plable=createlabels("label","for","phonenumber","Phone Number");
var br7=createlinebreak("br");
var pinput=createinput("input","type","phonenumber","id","phonenumber");
var br8=createlinebreak("br");
document.body.append(lable,br1,input,br2,mlable,br3,minput,br4,llable,br5,linput,br6,plable,br7,pinput,br8);

function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }
    function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }