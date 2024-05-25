export const getFlowStatusName = (status: any) => {
  let green = 'background-color: green; font-size:12px;border-radius:5px;padding:5px; color:white';
  let grey = 'background-color: #e5e7eb;  font-size:12px;border-radius:5px;padding:5px; color:#4b5563';
  let red = 'background-color: #EF4444; font-size:12px;border-radius:5px;padding:5px;color: white';
  switch (status) {
    case 'Reserved':
    case 'Ready':
    case 'InProgress':
      return {
        name: '待处理',
        style: green,
      };
    case 'Completed':
      return {
        name: '已处理',
        style: grey,
      };
    case 2:
      return {
        name: '已结束',
        style: grey,
      };
    case 3:
      return {
        name: '中止',
        style: red,
      };
    case 1:
      return {
        name: '进行中',
        style: green,
      };
    default:
      return { name: '', style: '' };
  }
}
