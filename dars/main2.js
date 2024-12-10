var n17Class = [
    {
      id: 1,
      name: 'Izzatjon',
      coin: '1000',
      username: 'izzatjon78',
      password: '12345',
    },
    {
      id: 2,
      name: 'Otabek',
      coin: '1200',
      username: 'otabek45',
      password: '12345',
    },
    {
      id: 3,
      name: 'Alibek',
      coin: '900',
      username: 'alibek34',
      password: '12345',
    },
    {
      id: 4,
      name: 'Shaxriyor',
      coin: '1020',
      username: 'shaxriyor23',
      password: '12345',
    },
    {
      id: 5,
      name: 'Qobiljon',
      coin: '900',
      username: 'qobiljon12',
      password: '12345',
    },
  ];

function Add_user(name,username,password){
    n17Class.push({
        id:n17Class.length+1,
        coin:0,
        username:username,
        password:password
    });
    return n17Class;
}

function Edit_user(userId,userPassword){
    var newArr = n17Class.map((value)=>{
        return value.id == userId ? {...value,password: userPassword} :value;
    });
}
console.log(Edit_user(4,'shaxriyor_7777'));
console.log(Add_user("Avazbek","avazbek123","9998811"));