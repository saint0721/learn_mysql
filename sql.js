module.exports = {
  customerList: `select * from customer`,
  customerInsert: `insert into customer set ?`,
  customerUpdate: `update customer set ? where id=?`,
  customerDelete: `delete from customer where id=?`
}