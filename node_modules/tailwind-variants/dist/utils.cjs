'use strict';

var o=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,c=t=>!t||typeof t!="object"||Object.keys(t).length===0,p=(t,e)=>JSON.stringify(t)===JSON.stringify(e);function f(t,e){t.forEach(function(n){Array.isArray(n)?f(n,e):e.push(n);});}function s(t){let e=[];return f(t,e),e}var y=(...t)=>s(t).filter(Boolean),i=(t,e)=>{let n={};for(let r in t)e!=null&&e.hasOwnProperty(r)?n[r]=typeof t[r]=="object"?i(t[r],e[r]):e[r]+" "+t[r]:n[r]=t[r];for(let r in e)n.hasOwnProperty(r)||(n[r]=e[r]);return n},a=t=>!t||typeof t!="string"?t:t.replace(/\s+/g," ").trim();

exports.falsyToString = o;
exports.flatArray = s;
exports.flatMergeArrays = y;
exports.isEmptyObject = c;
exports.isEqual = p;
exports.mergeObjects = i;
exports.removeExtraSpaces = a;
