//rem适配
const width=document.documentElement.clientWidth;
const styleNode=document.createElement('style');
const styleStr=`html{font-size:${width/16}px !important;}`;
styleNode.innerHTML=styleStr;
document.head.appendChild(styleNode);
