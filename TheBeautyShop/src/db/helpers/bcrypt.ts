import bcrypt from 'bcrypt';

export const hashPassword = (text: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(text, salt);
    return hash;
};
export const comparePassword = (text: string, hash: string) => {
    return bcrypt.compareSync(text, hash);
};