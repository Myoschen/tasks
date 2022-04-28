import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const Popup = Swal.mixin({
  timer: 2000,
  timerProgressBar: true,
  didOpen: (popup) => {
    popup.addEventListener('mouseenter', Swal.stopTimer);
    popup.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export { Toast, Popup };
