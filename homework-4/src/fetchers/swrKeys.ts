const apiUrl = 'https://tv-shows.infinum.academy';

export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  currentUser: `${apiUrl}/users/me`,
  allShows: `${apiUrl}/shows`,
  showsByPage: (page: number) => `${apiUrl}/shows?page=${page}&items=4`, 
  topRatedShows: `${apiUrl}/shows/top_rated`,
  getShow: (id: string) => `${apiUrl}/shows/${id}`,
  getReviews: (id: string) => `${apiUrl}/shows/${id}/reviews`,
  createReview: `${apiUrl}/reviews`,
  deleteReview: (reviewId: string) => `${apiUrl}/reviews/${reviewId}`,
  updateReview: (reviewId: string) => `${apiUrl}/reviews/${reviewId}`
};