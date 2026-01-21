import MLR from "ml-regression-multivariate-linear"

const Sample_MLR = () => {
  const x = [[0], [1], [2], [3]]
  // Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
  const y = [
    [0, 0, 0],
    [2, 4, 3],
    [4, 6, 5],
    [6, 8, 7],
  ]
  const mlr = new MLR(x, y)
  const resPredict = mlr.predict([3, 3])
  const resWeights = mlr.weights

  return (
    <>
      <div>Predict</div>
      <div>{resPredict.join("/")}</div>
      <div>Weights</div>
      {resWeights.map((w, i) => (
        <div key={i}>{w.join("/")}</div>
      ))}
    </>
  )
}

export default Sample_MLR
