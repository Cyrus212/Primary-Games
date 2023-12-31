import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        'game_db',
        'root',
        '7#06Qq^FRwD^k@b=;JXk{M;Q?',
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

export default sequelize;
