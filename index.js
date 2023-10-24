const now = dayjs();
const fiftiethAnniversary = dayjs('2024-08-08');

if (now.isAfter(fiftiethAnniversary)) {
  document.body.innerHTML += 'yes';
} else {
  document.body.innerHTML += 'no';
}
