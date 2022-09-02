// let alunos = [
//     {
//         nome: 'Zezim',
//         email: 'ze@email.com',
//         telefone: '85 9 8612-1231',
//         cidade: 'Fortaleza',
//     },
//     {
//         nome: 'Maria',
//         email: 'maria@email.com',
//         telefone: '85 9 8888-1212',
//         cidade: 'Caucaia',
//     },
//     {
//         nome: 'Chiquim',
//         email: 'chiquim@email.com',
//         telefone: '85 9 9485-1012',
//         cidade: 'FortalCity',
//     },
// ];

let alunos = JSON.parse(
    localStorage.getItem('alunos') || '[]'
);