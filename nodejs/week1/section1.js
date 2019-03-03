//1
class HYFStudents {
    constructor() {
        this.list =[];
        
    }
    addNewStudents(newStudent) {
        const checked = this.list.find ((obj)=>obj.name===newStudent.name);
        if(checked){
            console.log(`${newStudent.name} already exist`);
            return this.list;
        }
        else this.list.push(newStudent);
    }

    getAllStudents() {
        return this.list;
    }
    searchEverything(key, value) {
        return this.list.filter((obj)=>{
            if (obj.hasOwnProperty(key)){
                if(obj[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())){
                    return obj;
                }
            }
            else throw 'does not exist';
        });
    }
    editStudent(studentName,key,value) {
        const studentInfos=this.list.filter((obj)=> {
            if (obj.name===studentName) {
               return obj;
            }
        })
       // console.log(studentInfos[0].key=value);    

    }
}

const list_students=new HYFStudents();

list_students.addNewStudents({
    'name': 'Afshin',
    'class': 08,
    'email':'afshin.rommel@gmail.com',
    'phone': +4571326400
});

list_students.addNewStudents({
    'name': 'Hakki',
    'class': 08,
    'email':'hakkisuman@gmail.com',
    'phone': 147652346
});
list_students.addNewStudents({
    'name': 'Monya',
    'class': 07,
    'email':'kwenait@yahoo.ca',
    'phone': 126465679
});
list_students.addNewStudents({
    'name': 'Sofia',
    'class': 07,
    'email':'53jits@gmail.com',
    'phone': 71976719
});
list_students.addNewStudents(
    {
        'name': 'Badr',
        'class': 07,
        'email':'th3p3dr096@gmail.com',
        'phone':52780413
    })


    console.log(list_students.addNewStudents('name', 'Badr', 07));
   list_students.editStudent('Sofia','email','sofia53jits@gmail.com');

console.log(list_students.searchEverything('name','Monya'));
