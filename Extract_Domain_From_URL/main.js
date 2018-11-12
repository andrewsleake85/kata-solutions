//extracts a domain from a normal url

function domainName(url){
 if(url.slice(0,7) ==="http://" || url.slice(0,8) === "https://"){
   let parts = url.split("/")
   console.log(parts);
   return domainName(parts.join("."));
 } else {
   let parts = url.split(".");
   console.log(parts);
   for(let i=0;i<parts.length;i++){
     if(parts[i] !== "www" && parts[i].slice(0,4) !== "http" && parts[i] !== ""){
       return parts[i];
     } 
   }
 }
}

console.log(domainName('http://www.javaisfun.com/hello/ok.html'));