//     axios
//       .get('/user?ID=12345')
//       .then(function(response) {
//         // 处理成功情况
//         console.log(response)
//       })
//       .catch(function(error) {
//         // 处理错误情况
//         console.log(error)
//       })
//       .then(function() {
//         // 总是会执行
//       })
//   }
import axios from 'axios'

const http = {
  getFunctionConditionData() {
    axios.get('/data/current.json').then(response => {
      return response.data.data
    })
  }
}

export default http
