export const mathematics = [
  {
    category: "Algebra",
    concepts: [
      {
        name: "Quadratic Formula",
        formula: "x = (-b ± √(b² - 4ac)) / 2a",
        description: "Solves quadratic equations of the form ax² + bx + c = 0.",
      },
      {
        name: "Pythagorean Theorem",
        formula: "a² + b² = c²",
        description: "Relates the sides of a right triangle.",
      },
      {
        name: "Linear Equation",
        formula: "y = mx + b",
        description:
          "Represents a straight-line equation in slope-intercept form.",
      },
      {
        name: "Exponential Growth",
        formula: "A = P(1 + r/n)^(nt)",
        description:
          "Calculates the future value of an investment with compound interest.",
      },
      {
        name: "Binomial Theorem",
        formula: "(a + b)^n = Σ(k=0 to n) (n choose k) * a^(n-k) * b^k",
        description: "Expands the power of a binomial expression.",
      },
      {
        name: "Quotient Rule",
        formula: "(u/v)' = (vu' - uv') / v²",
        description:
          "Calculates the derivative of the quotient of two functions.",
      },
      {
        name: "Matrix Multiplication",
        formula: "C = AB",
        description:
          "Defines the multiplication of two matrices A and B to produce matrix C.",
      },
      {
        name: "Exponential Function",
        formula: "f(x) = a * e^(bx)",
        description:
          "Describes exponential growth or decay with parameters a and b.",
      },
      {
        name: "Exponential Function",
        formula: "f(x) = a * e^(bx)",
        description:
          "Describes exponential growth or decay with parameters 'a' and 'b'.",
      },
      {
        name: "Logarithmic Function",
        formula: "f(x) = logₐ(x)",
        description:
          "Represents the inverse operation of exponentiation, where 'a' is the base.",
      },
      {
        name: "Complex Numbers",
        formula: "z = a + bi",
        description:
          "Introduces the concept of complex numbers, where 'a' and 'b' are real numbers and 'i' is the imaginary unit.",
      },
      {
        name: "Matrix Inversion",
        formula: "A⁻¹",
        description:
          "Finds the inverse of a square matrix 'A' such that A * A⁻¹ = I (the identity matrix).",
      },
      {
        name: "Binomial Theorem",
        formula: "(a + b)^n = Σ(k=0 to n) (n choose k) * a^(n-k) * b^k",
        description:
          "Expands the power of a binomial expression using binomial coefficients.",
      },
      {
        name: "Vector Spaces",
        formula: "V",
        description:
          "Defines vector spaces as a set of vectors closed under addition and scalar multiplication.",
      },
      {
        name: "Linear Transformation",
        formula: "T(v)",
        description:
          "Represents a function that maps vectors from one vector space to another while preserving vector addition and scalar multiplication.",
      },
      {
        name: "Eigenvalues and Eigenvectors",
        formula: "Av = λv",
        description:
          "Finds eigenvalues (λ) and eigenvectors (v) of a square matrix 'A' in the context of linear transformations.",
      },
      {
        name: "Permutations",
        formula: "n!",
        description:
          "Calculates the number of ways to arrange 'n' distinct objects.",
      },
      {
        name: "Combinations",
        formula: "C(n, k) = n! / (k!(n-k)!)",
        description:
          "Calculates the number of ways to choose 'k' items from 'n' items without regard to the order.",
      },
      {
        name: "Matrix Determinant",
        formula: "det(A)",
        description:
          "Determines the scalar value associated with a square matrix, with applications in matrix transformations.",
      },
      {
        name: "Linear Independence",
        formula: "c₁v₁ + c₂v₂ + ... + cₖvₖ = 0",
        description:
          "Examines whether a set of vectors v₁, v₂, ..., vₖ is linearly independent based on the equation.",
      },
      {
        name: "Quadratic Formula",
        formula: "x = (-b ± √(b² - 4ac)) / (2a)",
        description: "Solves quadratic equations of the form ax² + bx + c = 0.",
      },
      {
        name: "Matrix Operations",
        formula: "C = A + B, C = A - B, C = AB",
        description:
          "Defines addition, subtraction, and multiplication of matrices A and B to produce matrix C.",
      },
      {
        name: "Polynomial Division",
        formula: "P(x) = D(x) * Q(x) + R(x)",
        description:
          "Divides a polynomial P(x) by another polynomial D(x) to get a quotient Q(x) and a remainder R(x).",
      },
      {
        name: "Cramer's Rule",
        formula: "x = det(Ax) / det(A)",
        description:
          "Solves a system of linear equations using determinants of coefficient matrices.",
      },
      {
        name: "Complex Conjugate",
        formula: "z = a + bi, z* = a - bi",
        description:
          "Obtains the complex conjugate of a complex number 'z' by changing the sign of the imaginary part.",
      },
      {
        name: "Row Echelon Form",
        formula: "0 0 * * * * 0",
        description:
          "Represents a matrix with leading 1's in each row, and all entries below leading 1's are zeros.",
      },
      {
        name: "Gaussian Elimination",
        formula:
          "Row operations to transform a matrix into row echelon form and solve systems of linear equations.",
      },
      {
        name: "Factorization",
        formula: "A = LU, A = QR",
        description:
          "Decomposes a matrix A into the product of lower and upper triangular matrices (LU) or orthogonal matrices (QR).",
      },
      {
        name: "Vector Dot Product",
        formula: "a · b = |a| |b| cos(θ)",
        description:
          "Calculates the dot product of vectors a and b, considering their magnitudes and the angle between them.",
      },
      {
        name: "Matrix Eigenvalues",
        formula: "det(A - λI) = 0",
        description:
          "Finds eigenvalues (λ) of a square matrix A by solving the characteristic equation.",
      },
      {
        name: "Pascal's Triangle",
        formula: "C(n, k) = C(n-1, k-1) + C(n-1, k)",
        description:
          "Generates binomial coefficients in a triangular pattern, useful in algebraic expansions.",
      },
      {
        name: "Set Theory Operations",
        formula: "Union, Intersection, Complement, Difference",
        description:
          "Performs operations on sets, including union, intersection, complement, and set difference.",
      },
    ],
  },
  {
    category: "Geometry",
    concepts: [
      {
        name: "Area of a Triangle",
        formula: "A = (1/2) * base * height",
        description: "Calculates the area of a triangle.",
      },
      {
        name: "Circumference of a Circle",
        formula: "C = 2πr",
        description: "Calculates the distance around a circle.",
      },
      {
        name: "Volume of a Cylinder",
        formula: "V = πr²h",
        description: "Calculates the volume of a cylinder.",
      },
      {
        name: "Law of Cosines",
        formula: "c² = a² + b² - 2ab cos(C)",
        description: "Relates the sides and angles of a triangle.",
      },
      {
        name: "Surface Area of a Sphere",
        formula: "A = 4πr²",
        description: "Calculates the total surface area of a sphere.",
      },
      {
        name: "Law of Sines",
        formula: "a/sin(A) = b/sin(B) = c/sin(C)",
        description: "Relates the sides and angles of a triangle.",
      },
      {
        name: "Perimeter of a Rectangle",
        formula: "P = 2(l + w)",
        description: "Calculates the total distance around a rectangle.",
      },
      {
        name: "Law of Tangents",
        formula: "(a - b) / (a + b) = tan((A - B) / 2)",
        description:
          "Relates the tangents of half-angles to the sides and opposite angles of a triangle.",
      },
      {
        name: "Area of a Rectangle",
        formula: "A = l * w",
        description:
          "Calculates the area of a rectangle with length (l) and width (w).",
      },
      {
        name: "Volume of a Cone",
        formula: "V = (1/3) * π * r² * h",
        description:
          "Calculates the volume of a cone with radius (r) and height (h).",
      },
      {
        name: "Heron's Formula",
        formula: "A = √(s * (s - a) * (s - b) * (s - c))",
        description:
          "Calculates the area of a triangle using its side lengths (a, b, c) and the semi-perimeter (s).",
      },
      {
        name: "Volume of a Rectangular Prism",
        formula: "V = lwh",
        description:
          "Calculates the volume of a rectangular prism with length (l), width (w), and height (h).",
      },
      {
        name: "Surface Area of a Cylinder",
        formula: "A = 2πr² + 2πrh",
        description:
          "Determines the total surface area of a cylinder with radius (r) and height (h).",
      },
      {
        name: "Volume of a Sphere",
        formula: "V = (4/3)πr³",
        description: "Calculates the volume of a sphere with radius (r).",
      },
      {
        name: "Area of a Sector",
        formula: "A = (θ/360) * πr²",
        description:
          "Finds the area of a sector of a circle with central angle θ and radius (r).",
      },
      {
        name: "Area of a Sector",
        formula: "A = (θ/360) * πr²",
        description:
          "Finds the area of a sector of a circle with central angle θ and radius (r).",
      },
      {
        name: "Orthocenter of a Triangle",
        formula: "H = A / (2R)",
        description:
          "Determines the orthocenter of a triangle with area (A) and circumradius (R).",
      },
      {
        name: "Center of Mass",
        formula: "x̄ = (Σ(xi * mi)) / M, ȳ = (Σ(yi * mi)) / M",
        description:
          "Finds the coordinates of the center of mass of a system of particles with masses (mi) and positions (xi, yi).",
      },
      {
        name: "Area of a Trapezoid",
        formula: "A = (1/2)h(b₁ + b₂)",
        description:
          "Calculates the area of a trapezoid with heights (h) and bases (b₁ and b₂).",
      },
      {
        name: "Law of Cosines",
        formula: "c² = a² + b² - 2ab cos(θ)",
        description:
          "Relates the sides and angles of a triangle using the cosine of an angle.",
      },
      {
        name: "Volume of a Cone",
        formula: "V = (1/3)πr²h",
        description:
          "Calculates the volume of a cone with radius (r) and height (h).",
      },
      {
        name: "Area of a Rhombus",
        formula: "A = d₁d₂/2",
        description:
          "Determines the area of a rhombus with diagonals (d₁ and d₂).",
      },
      {
        name: "Volume of a Rectangular Pyramid",
        formula: "V = (1/3)Bh",
        description:
          "Calculates the volume of a rectangular pyramid with base area (B) and height (h).",
      },
      {
        name: "Area of a Circle",
        formula: "A = πr²",
        description: "Determines the area of a circle with radius (r).",
      },
      {
        name: "Circumference of an Ellipse",
        formula: "C = 4aE(e)",
        description:
          "Calculates the circumference of an ellipse with semi-major axis (a) and eccentricity (e).",
      },
      {
        name: "Volume of a Triangular Prism",
        formula: "V = (1/2)Bh",
        description:
          "Finds the volume of a triangular prism with base area (B) and height (h).",
      },
      {
        name: "Area of a Parallelogram",
        formula: "A = bh",
        description:
          "Calculates the area of a parallelogram with base (b) and height (h).",
      },
      {
        name: "Euler's Formula (Polyhedra)",
        formula: "V - E + F = 2",
        description:
          "Relates the number of vertices (V), edges (E), and faces (F) of a polyhedron.",
      },
      {
        name: "Spherical Trigonometry",
        formula: "sin(A) / sin(a) = sin(B) / sin(b) = sin(C) / sin(c)",
        description:
          "Applies trigonometric concepts to spherical triangles on the surface of a sphere.",
      },
      {
        name: "Golden Ratio",
        formula: "φ = (1 + √5) / 2",
        description:
          "Represents the golden ratio, a unique mathematical constant with various geometric properties.",
      },
      {
        name: "Frustum of a Cone",
        formula: "V = (1/3)πh(h₁² + h₁h₂ + h₂²)",
        description:
          "Calculates the volume of a frustum, which is a section of a cone with two different radii and heights.",
      },
      {
        name: "Area of a Sector",
        formula: "A = (θ/360) * πr²",
        description:
          "Finds the area of a sector of a circle with central angle θ and radius (r).",
      },
      {
        name: "Heron's Formula (for triangles)",
        formula: "A = √(s(s-a)(s-b)(s-c))",
        description:
          "Calculates the area of a triangle with side lengths (a, b, c) and semiperimeter (s).",
      },
      {
        name: "Arc Length of a Circle",
        formula: "L = 2πr(θ/360)",
        description:
          "Determines the length of a circular arc given the radius (r) and central angle (θ).",
      },
    ],
  },
  {
    category: "Calculus",
    concepts: [
      {
        name: "Derivative of a Function",
        formula: "f'(x) = lim(h → 0) [f(x + h) - f(x)] / h",
        description: "Defines the derivative of a function with respect to x.",
      },
      {
        name: "Integration by Parts",
        formula: "∫ u dv = uv - ∫ v du",
        description: "A method for integrating products of functions.",
      },
      {
        name: "Chain Rule",
        formula: "d(uv)/dx = u'v + uv'",
        description: "Calculates the derivative of a product of two functions.",
      },
      {
        name: "Fundamental Theorem of Calculus",
        formula: "∫(a to b) f(x) dx = F(b) - F(a)",
        description: "Relates integration to differentiation.",
      },
      {
        name: "Partial Derivative",
        formula: "∂f/∂x",
        description:
          "Calculates the derivative of a multivariable function with respect to one variable.",
      },
      {
        name: "Taylor Series Expansion",
        formula: "f(x) = Σ(n=0 to ∞) (f^(n)(a) / n!) * (x - a)^n",
        description:
          "Expands a function into an infinite series of its derivatives at a point.",
      },
      {
        name: "Chain Rule (Generalized)",
        formula: "∂z/∂x = (∂z/∂u) * (∂u/∂x) + (∂z/∂v) * (∂v/∂x)",
        description:
          "Extends the chain rule to partial derivatives with multiple variables.",
      },
      {
        name: "Integration by Substitution",
        formula: "∫ f(u) du = ∫ f(g(x))g'(x) dx",
        description:
          "A method for solving integrals by substituting variables.",
      },
      {
        name: "Definite Integral",
        formula: "∫[a, b] f(x) dx",
        description:
          "Represents the accumulation of a function f(x) from a to b on the x-axis.",
      },
      {
        name: "L'Hôpital's Rule",
        formula: "lim(x → c) (f(x) / g(x)) = lim(x → c) (f'(x) / g'(x))",
        description:
          "Evaluates the limit of an indeterminate form by finding the limit of the derivatives of f(x) and g(x).",
      },
      {
        name: "Taylor Series",
        formula: "f(x) = Σ(n=0 to ∞) [f^n(a) / n!] * (x - a)^n",
        description:
          "Expands a function into an infinite series centered around the point a.",
      },
      {
        name: "Mean Value Theorem",
        formula: "f'(c) = (f(b) - f(a)) / (b - a)",
        description:
          "States that for a continuous function, there exists at least one point 'c' where the instantaneous rate of change equals the average rate of change over an interval [a, b].",
      },
      {
        name: "Second Derivative Test",
        formula: "f''(c) > 0 (concave up) or f''(c) < 0 (concave down)",
        description:
          "Determines the concavity of a function at a critical point 'c' and whether it is a local minimum or maximum.",
      },
      {
        name: "Related Rates",
        formula: "dA/dt = (∂A/∂x) * (dx/dt) + (∂A/∂y) * (dy/dt)",
        description:
          "Applies the chain rule to find the rate of change of one quantity with respect to time by considering its relationships with other changing quantities.",
      },
      {
        name: "Improper Integrals",
        formula: "∫[a, ∞) f(x) dx or ∫(-∞, b) f(x) dx",
        description:
          "Evaluates integrals with unbounded intervals, such as over the entire real line or to infinity.",
      },
      {
        name: "Differential Equations",
        formula: "dy/dx = f(x, y)",
        description:
          "Describes the relationship between a function 'y' and its derivative 'dy/dx' as an equation involving both 'x' and 'y'.",
      },
      {
        name: "Lagrange Multipliers",
        formula: "∇f = λ∇g",
        description:
          "Finds extrema of a function subject to equality constraints by introducing Lagrange multipliers.",
      },
      {
        name: "Taylor Series Expansion",
        formula: "f(x) = Σ(n=0 to ∞) (f^(n)(a) / n!) * (x - a)^n",
        description:
          "Approximates a function by expanding it as an infinite series of its derivatives at a point a.",
      },
      {
        name: "Euler's Method",
        formula: "y_(n+1) = y_n + h * f(x_n, y_n)",
        description:
          "Numerically approximates solutions to ordinary differential equations using discrete steps.",
      },
      {
        name: "Surface Integrals",
        formula: "∬_S f(x, y, z) dS",
        description:
          "Calculates the integral of a scalar function over a 2D surface in 3D space.",
      },
      {
        name: "Triple Integrals",
        formula: "∭ f(x, y, z) dV",
        description:
          "Evaluates the integral of a scalar function over a 3D region in space.",
      },
      {
        name: "Partial Derivative",
        formula: "∂f/∂x",
        description:
          "Calculates the derivative of a multivariable function with respect to one variable.",
      },
      {
        name: "Green's Theorem",
        formula: "∮C F · dr = ∬D (curl F) · dA",
        description:
          "Relates a line integral around a closed curve C to a double integral over the region D enclosed by C.",
      },
      {
        name: "Stokes' Theorem",
        formula: "∮C F · dr = ∬S (curl F) · dS",
        description:
          "Relates a surface integral of the curl of a vector field to a line integral around a closed curve.",
      },
      {
        name: "Parametric Equations",
        formula: "x = f(t), y = g(t)",
        description:
          "Describes the path of a point in the xy-plane using two functions of a parameter t.",
      },
      {
        name: "Polar Coordinates",
        formula: "x = r cos(θ), y = r sin(θ)",
        description:
          "Expresses points in the plane using a radial distance r and an angle θ.",
      },
      {
        name: "Line Integrals",
        formula: "∮C F · dr",
        description:
          "Calculates the integral of a vector field along a curve C in space.",
      },
      {
        name: "Double Integrals",
        formula: "∬ D f(x, y) dA",
        description:
          "Evaluates the integral of a scalar function over a 2D region in the xy-plane.",
      },
      {
        name: "Triple Integrals",
        formula: "∭ E f(x, y, z) dV",
        description:
          "Finds the integral of a scalar function over a 3D region in space.",
      },
      {
        name: "Simpson's Rule",
        formula:
          "∫[a, b] f(x) dx ≈ (h/3) * [f(a) + 4f(a + h) + 2f(a + 2h) + ... + 2f(b - 2h) + 4f(b - h) + f(b)]",
        description:
          "Approximates definite integrals using quadratic polynomials.",
      },
      {
        name: "Vector Fields",
        formula: "F(x, y, z) = (P(x, y, z), Q(x, y, z), R(x, y, z))",
        description:
          "Represents vector-valued functions in three-dimensional space.",
      },
      {
        name: "Implicit Differentiation",
        formula: "dy/dx = -∂F/∂x / ∂F/∂y",
        description: "Finds the derivative of implicitly defined functions.",
      },
      {
        name: "Taylor Series (Multivariable)",
        formula:
          "f(x, y) = Σ(n, m) [∂^(n+m)f/∂x^n∂y^m * (x-a)^n * (y-b)^m] / (n! * m!)",
        description:
          "Expands multivariable functions using mixed partial derivatives.",
      },
      {
        name: "Change of Variables (Jacobian)",
        formula: "∬ R f(u, v) dudv = ∬ S f(x(u, v), y(u, v)) |Jacobian| dudv",
        description:
          "Transforms double integrals by changing variables and considering the Jacobian determinant.",
      },
      {
        name: "Limit Definition of Derivative",
        formula: "f'(x) = lim(h → 0) [(f(x + h) - f(x)) / h]",
        description:
          "Defines the derivative of a function as the limit of the difference quotient as the interval h approaches zero.",
      },
      {
        name: "Integration by Parts",
        formula: "∫ u dv = uv - ∫ v du",
        description:
          "Applies the product rule in reverse to simplify the integration of products of functions.",
      },
      {
        name: "Parametric Differentiation",
        formula: "dy/dx = (dy/dt) / (dx/dt)",
        description:
          "Finds the derivative of a parametrically defined function by differentiating each component separately.",
      },
      {
        name: "Arc Length of a Curve",
        formula: "L = ∫[a, b] √(1 + (dy/dx)²) dx",
        description:
          "Determines the length of a curve represented by a parametric or function-defined equation.",
      },
      {
        name: "Double Integral in Polar Coordinates",
        formula: "∬ R f(r, θ) r dr dθ",
        description:
          "Evaluates double integrals over regions defined by polar coordinates.",
      },
      {
        name: "Volume of Revolution (Disk Method)",
        formula: "V = π∫[a, b] (f(x))² dx",
        description:
          "Calculates the volume of a solid obtained by rotating a region around the x-axis using disks.",
      },
      {
        name: "Taylor Series (Maclaurin Series)",
        formula: "f(x) = Σ(n=0 to ∞) [f^n(0) / n!] * x^n",
        description:
          "Represents a function as an infinite series centered at zero, useful for approximation.",
      },
      {
        name: "Vector Calculus",
        formula: "∇·F, ∇×F, ∇f",
        description:
          "Introduces vector calculus operators like divergence (∇·), curl (∇×), and gradient (∇) of vector fields.",
      },
      {
        name: "Taylor Series for Multivariable Functions",
        formula:
          "f(x, y) = Σ(n, m) [∂^(n+m)f/∂x^n∂y^m * (x-a)^n * (y-b)^m] / (n! * m!)",
        description:
          "Expands multivariable functions using mixed partial derivatives.",
      },
      {
        name: "Line Integral of a Vector Field",
        formula: "∮C F · dr",
        description:
          "Calculates the work done by a vector field along a curve C using dot products.",
      },
      {
        name: "Differential Equations (First Order)",
        formula: "dy/dx = f(x, y)",
        description:
          "Represents ordinary differential equations (ODEs) with first-order derivatives.",
      },
      {
        name: "Vector Valued Functions",
        formula: "r(t) = <f(t), g(t), h(t)>",
        description:
          "Describes functions that map real numbers to three-dimensional vectors.",
      },
    ],
  },
  {
    category: "Statistics",
    concepts: [
      {
        name: "Mean (Average)",
        formula: "μ = Σx / n",
        description: "Calculates the average of a set of numbers.",
      },
      {
        name: "Standard Deviation",
        formula: "σ = √(Σ(x - μ)² / n)",
        description: "Measures the spread of data from the mean.",
      },
      {
        name: "Normal Distribution",
        formula: "f(x) = (1 / (σ√(2π))) * e^(-((x - μ)² / (2σ²)))",
        description:
          "Describes the probability density function of a continuous random variable.",
      },
      {
        name: "Regression Analysis",
        formula: "y = a + bx",
        description:
          "Fits a linear model to a set of data points to predict a dependent variable.",
      },
      {
        name: "Standard Error",
        formula: "SE = σ / √n",
        description:
          "Measures the variability of the sample mean and estimates how well it represents the population mean.",
      },
      {
        name: "Confidence Interval",
        formula: "CI = x̄ ± (Z * (σ / √n))",
        description:
          "Defines a range around the sample mean within which the population mean is likely to fall with a certain level of confidence.",
      },
      {
        name: "Normal Distribution",
        formula: "Z = (X - μ) / σ",
        description:
          "Standardizes a variable X to the Z-score, allowing comparisons in a standard normal distribution.",
      },
      {
        name: "Regression Coefficient",
        formula: "β₁ = (Σ((X - X̄)(Y - Ȳ))) / Σ((X - X̄)²)",
        description:
          "Calculates the slope of the regression line in simple linear regression.",
      },
      {
        name: "Chi-Square Test",
        formula: "χ² = Σ((O - E)² / E)",
        description:
          "Tests the independence of two categorical variables using observed (O) and expected (E) frequencies.",
      },
      {
        name: "Coefficient of Determination (R-squared)",
        formula: "R² = 1 - (SSR / SST)",
        description:
          "Measures the proportion of the variance in the dependent variable that is predictable from the independent variable(s).",
      },
      {
        name: "Hypothesis Testing",
        formula: "H₀: μ = μ₀ vs. H₁: μ ≠ μ₀ (two-tailed test)",
        description:
          "Evaluates the significance of differences between sample statistics and population parameters.",
      },
      {
        name: "ANOVA (Analysis of Variance)",
        formula: "F = (MSB / MSW)",
        description:
          "Determines whether there are statistically significant differences between the means of multiple groups.",
      },
      {
        name: "Sampling Distribution",
        formula: "σ_x̄ = σ / √n",
        description:
          "Describes the distribution of sample means and its standard deviation.",
      },
      {
        name: "Poisson Distribution",
        formula: "P(X = k) = (e^(-λ) * λ^k) / k!",
        description:
          "Models the probability of a given number of events occurring in a fixed interval of time or space.",
      },
      {
        name: "Sampling Distributions",
        formula: "μₛ = μ, σₛ = σ/√n",
        description:
          "Describes the distribution of sample statistics (mean and standard deviation) for random samples of size 'n' from a population.",
      },
      {
        name: "Multinomial Distribution",
        formula:
          "P(X₁ = x₁, X₂ = x₂, ..., Xk = xk) = (n! / (x₁! * x₂! * ... * xk!)) * (p₁^x₁ * p₂^x₂ * ... * pk^xk)",
        description:
          "Models the probability of outcomes in experiments with more than two categories or classes.",
      },
      {
        name: "Residual Analysis",
        formula: "Residual = Observed - Predicted",
        description:
          "Examines the differences (residuals) between observed and predicted values in regression analysis.",
      },
      {
        name: "Spearman's Rank-Order Correlation",
        formula: "ρ = 1 - [(6∑d²) / (n(n²-1))]",
        description:
          "Measures the strength and direction of the monotonic relationship between two variables using ranks.",
      },
      {
        name: "Survival Analysis (Kaplan-Meier)",
        formula:
          "S(t) = Π(1 - (d/n)), d = number of deaths, n = number at risk",
        description:
          "Estimates the survival probability over time for subjects in a study with censored data.",
      },
      {
        name: "Sampling Bias",
        formula: "Bias = E(estimator) - parameter",
        description:
          "Quantifies the difference between the expected value of an estimator and the true population parameter.",
      },
      {
        name: "Pareto Chart",
        formula:
          "Graphical representation of data in descending order, highlighting the most significant factors.",
      },
      {
        name: "Coefficient of Variation (CV)",
        formula: "CV = (σ / μ) * 100%",
        description:
          "Measures the relative variability of a dataset by comparing the standard deviation (σ) to the mean (μ).",
      },
      {
        name: "Analysis of Covariance (ANCOVA)",
        formula: "Y = α + β₁X + β₂Z + ε",
        description:
          "Extends analysis of variance (ANOVA) to include one or more continuous covariates (Z) in the model.",
      },
      {
        name: "Bayesian Inference",
        formula: "P(θ|X) ∝ P(X|θ) * P(θ)",
        description:
          "Updates the probability of a hypothesis (θ) given observed data (X) using Bayes' theorem.",
      },
      {
        name: "Receiver Operating Characteristic (ROC) Curve",
        formula:
          "Plot of the true positive rate (sensitivity) against the false positive rate (1 - specificity) for different threshold values.",
      },
      {
        name: "Principal Component Analysis (PCA)",
        formula:
          "Transforms correlated variables into a set of linearly uncorrelated variables called principal components.",
      },
      {
        name: "Hypothesis Testing",
        formula: "Z = (X̄ - μ) / (σ/√n)",
        description:
          "Tests hypotheses about population parameters based on sample data using the z-test statistic.",
      },
      {
        name: "Confidence Intervals",
        formula: "CI = X̄ ± (Z * σ/√n)",
        description:
          "Calculates a range of values that likely contains the true population parameter with a specified confidence level.",
      },
      {
        name: "Analysis of Variance (ANOVA)",
        formula: "F = (MSB / MSW)",
        description:
          "Evaluates the differences in means among two or more groups to determine if they are statistically significant.",
      },
      {
        name: "Time Series Analysis",
        description:
          "Analyzes data collected at successive points in time to identify trends, patterns, and make forecasts.",
      },
      {
        name: "Sensitivity and Specificity",
        formula: "Sensitivity = TP / (TP + FN), Specificity = TN / (TN + FP)",
        description:
          "Measures the performance of diagnostic tests or classification models.",
      },
      {
        name: "Cox Proportional-Hazards Model",
        formula: "h(t) = h₀(t) * e^(β₁X₁ + β₂X₂ + ... + βpXp)",
        description:
          "Examines the effect of predictor variables on survival times in survival analysis.",
      },
      {
        name: "Random Sampling Methods",
        description:
          "Explains techniques for selecting a random sample from a population to ensure unbiased and representative results.",
      },
      {
        name: "Simpson's Paradox",
        description:
          "Describes a phenomenon in which trends or relationships in groups of data are reversed when the groups are combined.",
      },
      {
        name: "Probability Distributions",
        description:
          "Covers various probability distributions, including the binomial, Poisson, exponential, and Weibull distributions.",
      },
    ],
  },
];
