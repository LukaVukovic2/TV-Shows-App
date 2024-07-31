const apiUrl = 'https://tv-shows.infinum.academy';

export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  currentUser: `${apiUrl}/users/me`,
  getShowsByPage: (page: string, items: string) => `${apiUrl}/shows?page=${page}&items=${items}`,
  topRatedShows: `${apiUrl}/shows/top_rated`,
  getShow: (id: string) => `${apiUrl}/shows/${id}`,
  getReviews: (id: string, page: string, items: string) => `${apiUrl}/shows/${id}/reviews?page=${page}&items=${items}`,
  createReview: `${apiUrl}/reviews`,
  deleteReview: (reviewId: string) => `${apiUrl}/reviews/${reviewId}`,
  updateReview: (reviewId: string) => `${apiUrl}/reviews/${reviewId}`
};