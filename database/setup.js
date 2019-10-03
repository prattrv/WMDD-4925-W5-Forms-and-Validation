const {connectionPool} = require('./connection.js')

connectionPool.query(
    'DROP TABLE IF EXISTS dogs',
    (error, results) => {
        if (error)
            console.log(error)
        else {
            connectionPool.query(
                'CREATE TABLE dogs (name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, dog_id INT AUTO_INCREMENT, PRIMARY KEY (dog_id));',
                (error, results) => {
                    if (error)
                        console.log(error)
                    else {
                        console.log('Success!')
                        console.log(results)
                    }
                        
                    process.exit();
                }
            )           
        }
    }
)