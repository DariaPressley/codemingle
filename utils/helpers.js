module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    check_id: (id1, id2) => {
      console.log(id1 + ' space ' + id2);
      if (id1 === id2){
        return '<button class="delete"></button>';
      }
    }
  };
  