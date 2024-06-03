export default function updateStudentGradeByCity(students, city, newGrades) {
  const noGrade = { grade: 'N/A' };

  return students.filter((s) => s.location === city)
    .map((s) => ({
      id: s.id,
      firstName: s.firstName,
      location: s.location,
      grade: (newGrades
        .filter((g) => g.studentId == s.id)
        .pop() || noGrade).grade,
    }));
}
