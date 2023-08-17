import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
        name: 'toDb',
        location: 'default'
    },
    () => {
        console.log("Database connected!")
    }, //on success
    error => console.log("Database error", error) //on error
)
 
 const init = () => {
    db.executeSql("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, title Text,dateinfo Text,isDone int)", [], (result) => {
        console.log("Table created successfully");
    }, (error) => {
        console.log("Create table error", error)
    })
}
 const put = () => {
    let sql = "INSERT INTO user (title,dateinfo,isDone) VALUES (?, ?,?)";
    let params = ["yoursocialmd@gmail.com", "MD Sarfaraj",0]; //storing user data in an array
    db.executeSql(sql, params, (result) => {
        Alert.alert("Success", "User added successfully.");
    }, (error) => {
        console.log("Create user error", error);
    });
}


const get = async (setItems) => {
    var result;
    let sql = "SELECT * FROM user";
    db.transaction(async(tx) => {
        tx.executeSql(sql, [], async(tx, resultSet) => {
            var length = resultSet.rows.length;
            var d=[];
            for(var i=0;i<length;i++)
                d.push(resultSet.rows.item(i));
               await setItems(d);

        }, (error) => {
            console.log("List user error", error);
        })
    })
   
}
module.exports={init,put,get}