export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((s) => s.id);
  }
  return [];
}
