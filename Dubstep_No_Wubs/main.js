// this script changes all  WUB's into " "


let ex1 = "ThWUBisSongWUBWUBWUBisgoodWUBWUB";

function songDecoder(song){
  let noWubs = song.replace( /WUB/gi, " ");
  return noWubs.replace(/ +(?= )/g,'').trim();
}
console.log(songDecoder(ex1));