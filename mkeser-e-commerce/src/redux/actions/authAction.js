// ==========================
// 1. redux/actions/authActions.js
// ==========================

// ► Amaç: Tüm action tiplerini ve action creator fonksiyonlarını burada tanımlarız. 
// Bu, kodun modüler yapılmasını sağlar ve tekrar kullanılabilirliği artırır.

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// Sync action creators
export const signUpRequest = () => ({
    type: SIGN_UP_REQUEST
});
export const signUpSuccess = (user) => ({
    type: SIGN_UP_SUCCESS,
    payload: user
});
export const signUpFailure = (error) => ({
    type: SIGN_UP_FAILURE,
    payload: error
});

// Async action creator (Thunk)
export const signUp = (formData) => {
  return async (dispatch) => {
    dispatch(signUpRequest()); // Kayıt isteği başlatılıyor

    try {
      // API simülasyonu (gerçek projede axios ile backend'e istek atılabilir)
      const user = await new Promise((resolve) =>
        setTimeout(() => resolve(formData), 1000)
      );
      dispatch(signUpSuccess(user)); // Başarılıysa user state'e yazılır
    } catch (error) {
      dispatch(signUpFailure('Kayıt başarısız')); // Hata durumu yönetimi
    }
  };
};