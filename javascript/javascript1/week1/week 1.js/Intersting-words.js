let firstWords=["Univerce","Star","Worlds","Dimentions","Planets","Black hole","Galaxies","Comets","Aliens","Big Bang"];
let secondWords=["Beauty","Brighten","Darknees","Power","Heat","Fair","Idealistic","Mysterious","Deep","Creative"];
for(let i=0<10;i++)
{
  const randomNumber1 = Math.floor(math.random() * 10);
  const randomNumber2 = Math.floor(math.random() * 10);
  startupName=firstWords[randomNumber1]+" " + secondWords[randomNumber2];
  statupLength=startupName.length;
  console.log("Name : "+startupName+"\t\tLength="+startupLength);
}