
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/ui/Home'
import About from '../pages/about/ui/About'
import Header from '../widgets/header/ui/Header'

// больших надежд стоить не нужно, я так, заранее :) но большую часть я написала руками хотя бы
//　　　　　／ ＞　  フ
//　　　　　| 　_　 _|
//　 　　　／`ミ _x 彡
//　　 　 /　　　 　 |
//　　　 /　 ヽ　　 ﾉ
//　／￣|　　 |　|　|
//　| (￣ヽ＿_ヽ_)_)
//　＼二つ

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
