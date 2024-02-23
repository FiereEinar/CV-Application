import { v4 as uuid } from 'uuid'

export default function createExperience() {
  return {
    company: '',
    position: '',
    location: '',
    description: '',
    startDate: '',
    endDate: '',
    id: uuid()
  };
}
