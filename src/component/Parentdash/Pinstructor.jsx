import React from 'react';

const Pinstructors = () => {
  const teachers = [
    {
      id: 1,
      name: 'uwamahoro solange',
      subjects: ['English level 1'],
      imageUrl:
        'https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg',
    },
    {
      id: 2,
      name: 'Mugisha patrick ',
      subjects: ['physics level 2'],
      imageUrl:
        'https://st.depositphotos.com/1037987/2755/i/450/depositphotos_27552961-stock-photo-portrait-of-teacher-in-classroom.jpg',
    },
    {
      id: 3,
      name: 'Teacher Name 1',
      subjects: ['kinyarwanda level 1'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDUU77kr6ff56EMV_Z560guTR7Y2iz28oY1tavxxX8A&s',
    },
    {
      id: 4,
      name: 'Anitha Sandrine',
      subjects: ['computer sciance leve3' ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdt0aHzwaekXFGujbg0drmuMHRpO_4iHpKKaKSKXywYg&s',
    },
    {
      id: 5,
      name: 'Usanase Sandrine',
      subjects: ['Math level 3'],
      imageUrl:
        'https://t4.ftcdn.net/jpg/04/44/93/21/360_F_444932136_scHFxRZFB55u8VEKHUeU7s9gW7YS78lo.webp',
    },
    {
      id: 6,
      name: ' Umuratwa Rebekker',
      subjects: ['English level 4'],
      imageUrl:
        'https://t4.ftcdn.net/jpg/01/13/31/65/240_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg',
    },
    {
      id: 7,
      name: 'lita mirreille',
      subjects: ['Science level 5'],
      imageUrl:
        'https://t4.ftcdn.net/jpg/03/18/40/09/240_F_318400976_8xA8EmS76mI0wZKP9gF0H9h4DDYO7CI6.jpg',
    },
    {
      id: 8,
      name: 'Esperance MuhawenImana',
      subjects: ['History level 6'],
      imageUrl:
        'https://t4.ftcdn.net/jpg/02/34/47/83/240_F_234478336_bRxx9eiWy3g9hrEwjE7Cibu4LgSGBHnc.jpg',
    },
    {
      id: 9,
      name: 'Kaneza Peace',
      subjects: ['English level 7'],
      imageUrl:
        'https://t3.ftcdn.net/jpg/04/61/20/14/240_F_461201426_x416DzHHMUg3B1LydRUbnUGIHNo6CtW0.jpg',
    },
    {
      id: 10,
      name: 'Isingizwe Axelle',
      subjects: ['Umurerwa Alice'],
      imageUrl:
        'https://t3.ftcdn.net/jpg/02/27/67/10/240_F_227671046_lc1Vyx49VVsreh8HdvVheVKX5hHwyWfZ.jpg',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {teachers.map((teacher) => (
        <div
          key={teacher.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            width: '200px',
          }}
        >
          <img
            src={teacher.imageUrl}
            alt={teacher.name}
            style={{ width: '100%', height: 'auto' }}
          />
          <h3 style={{ margin: '10px 0' }}>{teacher.name}</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Subjects: {teacher.subjects.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pinstructors;
