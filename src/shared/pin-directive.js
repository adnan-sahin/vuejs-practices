// function applyStyle(element, binding) {
//   // console.log(binding);
//   // console.log(binding.value);
//   Object.keys(binding.value).forEach((position) => {
//     //   console.log(binding.value[position]);
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// }
// export default {
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
// };


// you can use below fucntion insted of export default update and bind
export default function (element, binding) {
  // console.log(binding);
  // console.log(binding.value);
  Object.keys(binding.value).forEach((position) => {
    //   console.log(binding.value[position]);
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

// export default {
//   bind: (element, binding) => {
//     if (!binding.arg) return;

//     Object.keys(binding.modifiers).forEach((key) => {
//       element.style[key] = '5px';
//     });
//     element.style.position = 'absolute';
//   },
// };
