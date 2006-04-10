RemoveFormat=function(editor){this.editor=editor;var cfg=editor.config;var actionHandlerFunctRef=RemoveFormat.actionHandler(this);cfg.registerButton({id:"RemoveFormat",tooltip:RemoveFormat_langArray["RemoveFormatTooltip"],image:editor.imgURL("ed_clean.gif","RemoveFormat"),textMode:false,action:actionHandlerFunctRef});this.popupWidth=285;this.popupHeight=255;};RemoveFormat.I18N=RemoveFormat_langArray;RemoveFormat._pluginInfo={name:"RemoveFormat",version:"1.5",developer:"Stanislas Rolland",developer_url:"http://www.fructifor.ca/",sponsor:"Fructifor Inc.",sponsor_url:"http://www.fructifor.ca/",license:"GPL"};RemoveFormat.actionHandler=function(instance){return(function(editor){instance.buttonPress(editor);});};RemoveFormat.prototype.buttonPress=function(editor){var applyRequestFunctRef=RemoveFormat.applyRequest(this,editor);editor._popupDialog("plugin://RemoveFormat/removeformat",applyRequestFunctRef,editor,this.popupWidth,this.popupHeight);};RemoveFormat.applyRequest=function(instance,editor){return(function(param){editor.focusEditor();if(param){if(param["cleaning_area"]=="all"){var html=editor._doc.body.innerHTML;}else{var html=editor.getSelectedHTML();};if(html){if(param["html_all"]==true){html=html.replace(/<[\!]*?[^<>]*?>/g,"");};if(param["formatting"]==true){var regF1=new RegExp("<\/?(abbr|acronym|b[^a-zA-Z]|big|cite|code|em[^a-zA-Z]|font|i[^a-zA-Z]|q|s[^a-zA-Z]|samp|small|span|strike|strong|sub|sup|u[^a-zA-Z]|var)[^>]*>","gi");html=html.replace(regF1,"");var regF2=new RegExp(" style=\"[^>\"]*\"", "gi");var regF3=new RegExp(" (class|align|cellpadding|cellspacing|frame|bgcolor)=(([^>\s\"]+)|(\"[^>\"]*\"))","gi");html=html.replace(regF2,"").replace(regF3,"");}if(param["images"]==true){html=html.replace(/<\/?img[^>]*>/gi,"");}if(param["ms_formatting"]==true){var regMS1=new RegExp("(\r\n|\n|\r)","g");html=html.replace(regMS1," ");var regMS2=new RegExp("<(b[^r]|strong|i|em|p|li|ul) [^>]*>","gi");html=html.replace(regMS2,"<$1>");var regMS3=new RegExp(" style=\"[^>\"]*\"", "gi");var regMS4=new RegExp(" (class|align)=(([^>\s\"]+)|(\"[^>\"]*\"))","gi");html=html.replace(regMS3,"").replace(regMS4,"");html=html.replace(/<em>/gi,"<i>").replace(/<\/em>/gi, "</i>");html=html.replace(/<\/?span[^>]*>/gi,"").replace(/<\/?div[^>]*>/gi,"").replace(/<\?xml:[^>]*>/gi,"").replace(/<\/?st1:[^>]*>/gi,"").replace(/<\/?[a-z]:[^>]*>/g,"");html=html.replace(/<!--[^>]*>/gi,"");oldlen=html.length+1;var reg6=new RegExp("<([a-z][a-z]*)> *<\/\1>","gi");var reg7=new RegExp("<([a-z][a-z]*)> *<\/?([a-z][^>]*)> *<\/\1>","gi");var reg8=new RegExp("<([a-z][a-z]*)><\1>","gi");var reg9=new RegExp("<\/([a-z][a-z]*)><\/\1>","gi");var reg10=new RegExp("[\x20]+","gi");while(oldlen>html.length){oldlen=html.length;html=html.replace(reg6," ").replace(reg7,"<$2>");html=html.replace(reg8,"<$1>").replace(reg9,"<\/$1>");html=html.replace(reg10," ");}}if(param["cleaning_area"]=="all"){editor._doc.body.innerHTML=html;}else{editor.insertHTML(html);}}}else{return false;}});};

