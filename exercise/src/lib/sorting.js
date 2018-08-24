import formatDate from './formateDate'

export const sortByNameASC = (a,b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) //sort string ascending
      return -1 
  if (nameA > nameB)
      return 1
  return 0 //default return value (no sorting)
}

export const sortByNameDESC = (a,b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA > nameB) //sort string descending
      return -1 
  if (nameA < nameB)
      return 1
  return 0 //default return value (no sorting)
}

export const sortByDateASC = (a,b) => {
  const date_a = formatDate(a.detail)
  const date_b = formatDate(b.detail)
  const dateA = new Date(date_a)
  const dateB = new Date(date_b)

  if (dateA > dateB) //sort date ascending
      return 1 
  if (dateA < dateB)
      return -1
  return 0 //default return value (no sorting)
}

export const sortByDateDESC = (a,b) => {
  const date_a = formatDate(a.detail)
  const date_b = formatDate(b.detail)
  const dateA = new Date(date_a)
  const dateB = new Date(date_b)

  if (dateA > dateB) //sort date descending
      return -1 
  if (dateA < dateB)
      return 1
  return 0 //default return value (no sorting)
}