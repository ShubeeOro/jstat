[jStat](http://www.jstat.org/) - JavaScript Statistical Library
===============================================================

Forked from [jStat](https://github.com/brigalabs/jstat/tree/typescript-types) by brigalabs

I needed this for a typescript statistic calculator project (Damn you Ahmed) and for it to deploy on Vercel

I don't need everything but since I already started, might as well try making the rest of it

**NOT TESTED FULLY**: I cannot say if everything will function but deploying a typescript project should work on Vercel.

To install (WIP)
```
npm remove jstat

```

TODO LIST
---------
Core Functionality
 * [X] ~~*jStat()*~~ [2024-01-11]
 * [X] ~~*rows()*~~ [2024-01-11]
 * [X] ~~*rowa()*~~ [2024-01-11]
 * [X] ~~*cols()*~~ [2024-01-11]
 * [X] ~~*cola()*~~ [2024-01-11]
 * [X] ~~*slice()*~~ [2024-01-11]
 * [X] ~~*sliceAssign()*~~ [2024-01-11]
 * [X] ~~*dimensions()*~~ [2024-01-11]
 * [X] ~~*row()*~~ [2024-01-11]
 * [X] ~~*col()*~~ [2024-01-11]
 * [X] ~~*diag()*~~ [2024-01-11]
 * [X] ~~*antidiag()*~~ [2024-01-11]
 * [X] ~~*diagonal()*~~ [2024-01-11]
 * [X] ~~*transpose()*~~ [2024-01-11]
 * [X] ~~*map( func )*~~ [2024-01-11]
 * [X] ~~*cumreduce( func )*~~ [2024-01-11]
 * [X] ~~*alter( func )*~~ [2024-01-11]
 * [X] ~~*create()*~~ [2024-01-11]
 * [X] ~~*zeros()*~~ [2024-01-11]
 * [X] ~~*ones()*~~ [2024-01-11]
 * [X] ~~*rand()*~~ [2024-01-11]
 * [X] ~~*copy()*~~ [2024-01-11]
 * [X] ~~*identity()*~~ [2024-01-11]
 * [X] ~~*seq()*~~ [2024-01-11]
 * [X] ~~*arange()*~~ [2024-01-11]
 * [X] ~~*clear()*~~ [2024-01-11]
 * [X] ~~*symmetric()*~~ [2024-01-11]
jStat Utility Methods
 * [ ] utils.calcRdx( num0, num1 )
 * [ ] utils.isArray( arg )
 * [ ] utils.isFunction( arg )
 * [ ] utils.isNumber( arg )
Vector Functionality
 * [X] ~~*sum()*~~ [2024-01-11]
 * [X] ~~*sumsqrd()*~~ [2024-01-11]
 * [X] ~~*sumsqerr()*~~ [2024-01-11]
 * [X] ~~*sumrow()*~~ [2024-01-11]
 * [X] ~~*product()*~~ [2024-01-11]
 * [X] ~~*min()*~~ [2024-01-11]
 * [X] ~~*max()*~~ [2024-01-11]
 * [ ] mean()
 * [ ] meansqerr()
 * [ ] geomean()
 * [X] ~~*median()*~~ [2024-01-11]
 * [ ] cumsum()
 * [ ] cumprod()
 * [ ] diff()
 * [ ] rank()
 * [ ] mode()
 * [ ] range()
 * [X] ~~*variance()*~~ [2024-01-11]
 * [ ] pooledvariance()
 * [ ] deviation()
 * [ ] stdev()
 * [ ] pooledstdev()
 * [ ] meandev()
 * [ ] meddev()
 * [ ] skewness()
 * [ ] kurtosis()
 * [ ] coeffvar()
 * [X] ~~*quartiles()*~~ [2024-01-11]
 * [X] ~~*quantiles()*~~ [2024-01-11]
 * [ ] percentile()
 * [ ] percentileOfScore()
 * [ ] histogram()
 * [ ] covariance()
 * [ ] corrcoeff()
 * [ ] spearmancoeff()
Distributions
 * [X] ~~*jStat.beta*~~ [2024-01-11]
 * [X] ~~*jStat.centralF*~~ [2024-01-11]
 * [ ] jStat.cauchy
 * [ ] jStat.chisquare
 * [ ] jStat.exponential
 * [ ] jStat.gamma
 * [ ] jStat.invgamma
 * [ ] jStat.kumaraswamy
 * [X] ~~*jStat.lognormal*~~ [2024-01-11]
 * [X] ~~*jStat.normal*~~ [2024-01-11]
 * [ ] jStat.pareto
 * [X] ~~*jStat.studentt*~~ [2024-01-11]
 * [ ] jStat.tukey
 * [ ] jStat.weibull
 * [ ] jStat.uniform
 * [ ] jStat.binomial
 * [ ] jStat.negbin
 * [ ] jStat.hypgeom
 * [ ] jStat.poisson
 * [ ] jStat.triangular
 * [ ] jStat.arcsine
Linear Algebra
Instance Functionality
 * [X] ~~*add( arg )*~~ [2024-01-11]
 * [X] ~~*subtract( arg )*~~ [2024-01-11]
 * [X] ~~*divide( arg )*~~ [2024-01-11]
 * [X] ~~*multiply( arg )*~~ [2024-01-11]
 * [X] ~~*dot( arg )*~~ [2024-01-11]
 * [X] ~~*pow( arg )*~~ [2024-01-11]
 * [X] ~~*exp()*~~ [2024-01-11]
 * [X] ~~*log()*~~ [2024-01-11]
 * [X] ~~*abs()*~~ [2024-01-11]
 * [X] ~~*norm()*~~ [2024-01-11]
 * [X] ~~*angle( arg )*~~ [2024-01-11]
Static Functionality
 * [X] ~~*add( arr, arg )*~~ [2024-01-11]
 * [X] ~~*subtract( arr, arg )*~~ [2024-01-11]
 * [X] ~~*divide( arr, arg )*~~ [2024-01-11]
 * [X] ~~*multiply( arr, arg )*~~ [2024-01-11]
 * [X] ~~*dot( arr1, arr2 )*~~ [2024-01-11]
 * [ ] outer( A, B )
 * [X] ~~*pow( arr, arg )*~~ [2024-01-11]
 * [X] ~~*exp( arr )*~~ [2024-01-11]
 * [X] ~~*log( arr )*~~ [2024-01-11]
 * [X] ~~*abs( arr )*~~ [2024-01-11]
 * [X] ~~*norm( arr )*~~ [2024-01-11]
 * [X] ~~*angle( arr1, arr2 )*~~ [2024-01-11]
 * [ ] aug( A, B )
 * [ ] det( A )
 * [ ] inv( A )
 * [ ] gauss_elimination( A, B )
 * [ ] gauss_jordan( A, B )
 * [ ] lu( A )
 * [ ] cholesky( A )
 * [ ] gauss_jacobi( A, b, x, r )
 * [ ] gauss_seidel( A, b, x, r )
 * [ ] SOR( A, b, x, r, w )
 * [ ] householder( A )
 * [ ] QR( A )
 * [ ] lstsq( A, b )
 * [ ] jacobi()
 * [ ] rungekutta()
 * [ ] romberg()
 * [ ] richardson()
 * [ ] simpson()
 * [ ] hermite()
 * [ ] lagrange()
 * [ ] cubic_spline()
 * [ ] gauss_quadrature()
 * [ ] PCA()
Statistical Test
Statistics Instance Functionality
 * [X] ~~*zscore( value[, flag] )*~~ [2024-01-11]
 * [X] ~~*ztest( value, sides[, flag] )*~~ [2024-01-11]
 * [ ] tscore( value )
 * [ ] ttest( value, sides )
 * [ ] anovafscore()
 * [ ] anovaftest()
Z Statistics
 * [X] ~~*jStat.zscore( value, mean, sd )*~~ [2024-01-11]
 * [X] ~~*jStat.zscore( value, array[, flag] )*~~ [2024-01-11] 
 * [X] ~~*jStat.ztest( value, mean, sd, sides )*~~ [2024-01-11]
 * [X] ~~*jStat.ztest( zscore, sides )*~~ [2024-01-11]
 * [X] ~~*jStat.ztest( value, array, sides[, flag] )*~~ [2024-01-11]
T Statistics
 * [X] ~~*jStat.tscore( value, mean, sd, n )*~~ [2024-01-11]
 * [X] ~~*jStat.tscore( value, array )*~~ [2024-01-11]
 * [X] ~~*jStat.ttest( value, mean, sd, n, sides )*~~ [2024-01-11]
 * [X] ~~*jStat.ttest( tscore, n, sides )*~~ [2024-01-11]
 * [X] ~~*jStat.ttest( value, array, sides )*~~ [2024-01-11]
F Statistics
 * [ ] jStat.anovafscore( array1, array2, ..., arrayn )
 * [ ] jStat.anovafscore( [array1,array2, ...,arrayn] )
 * [ ] jStat.anovaftest( array1, array2, ...., arrayn )
 * [ ] jStat.ftest( fscore, df1, df2)
Tukey's Range Test
 * [ ] jStat.qscore( mean1, mean2, n1, n2, sd )
 * [ ] jStat.qscore( array1, array2, sd )
 * [ ] jStat.qtest( qscore, n, k )
 * [ ] jStat.qtest( mean1, mean2, n1, n2, sd, n, k )
 * [ ] jStat.qtest( array1, array2, sd, n, k )
 * [X] ~~*jStat.tukeyhsd( arrays )*~~ [2024-01-11]
Confidence Intervals
 * [ ] jStat.normalci( value, alpha, sd, n )
 * [ ] jStat.normalci( value, alpha, array )
 * [ ] jStat.tci( value, alpha, sd, n )
 * [ ] jStat.tci( value, alpha, array )
 * [ ] jStat.fn.oneSidedDifferenceOfProportions( p1, n1, p2, n2 )
 * [ ] jStat.fn.twoSidedDifferenceOfProportions( p1, n1, p2, n2 )
Regression Model
 * [ ] ols( endog, exog )