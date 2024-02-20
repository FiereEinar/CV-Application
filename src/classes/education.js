import { v4 as uuid } from 'uuid'

export default function createEducation() {
  return {
    school: '',
    degree: '',
    location: '',
    startDate: '',
    endDate: '',
    id: uuid()
  };
}
