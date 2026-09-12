// Curated display LaTeX for every formula panel in Kelly Studio.
module.exports={
 'scenario-growth':String.raw`g(f)=\sum_j p_j\ln\!\left[1+r+f(R_j-c-r)\right]`,
 'compound-growth':String.raw`\begin{aligned}W_n&=W_0\prod_{t=1}^{n}(1+fR_t)\\[3pt]\ln\!\left(\dfrac{W_n}{W_0}\right)&=\sum_{t=1}^{n}\ln(1+fR_t)\\[3pt]f^*&=\operatorname*{arg\,max}_{f}\operatorname{E}[\ln(1+fR)]\end{aligned}`,
 'binary-solution':String.raw`\begin{aligned}g(f)&=p\ln(1+fG)+q\ln(1-fL)\\g'(f)&=\dfrac{pG}{1+fG}-\dfrac{qL}{1-fL}\\g'(f)=0&\Longrightarrow pG-pfGL=qL+qfGL\\&\Longrightarrow pG-qL=fGL(p+q)=fGL\\[3pt]f^*&=\dfrac{pG-qL}{GL}=\dfrac{p}{L}-\dfrac{q}{G}\end{aligned}`,
 'binary-concavity':String.raw`g''(f)=-\dfrac{pG^2}{(1+fG)^2}-\dfrac{qL^2}{(1-fL)^2}<0`,
 'worked-example':String.raw`\begin{aligned}f^*&=\dfrac{0{,}55}{0{,}20}-\dfrac{0{,}45}{0{,}20}=0{,}50=50\%\\\text{Position}&=100{.}000\,\mathrm{EUR}\cdot0{,}50=50{.}000\,\mathrm{EUR}\\\text{Depotverlust}&=0{,}50\cdot0{,}20=10\%=10{.}000\,\mathrm{EUR}\\g(0{,}50)&=0{,}55\ln(1{,}10)+0{,}45\ln(0{,}90)\approx0{,}005008\end{aligned}`,
 'cash-costs':String.raw`\begin{aligned}U&=G-c-r,&D&=L+c+r,&B&=1+r\\g(f)&=p\ln(B+fU)+q\ln(B-fD)\\f^*&=\dfrac{B(pU-qD)}{UD},& &\text{falls }U>0\text{ und }D>0\\p&>\dfrac{D}{U+D}& &\text{(Gewinnschwelle gegen Cash)}\end{aligned}`,
 'fractional-kelly':String.raw`\begin{aligned}f_{\mathrm{reduziert}}&=\lambda f^*_{\mathrm{vorsichtig}}\\f_{\mathrm{Plan}}&=\min\!\left(f_{\mathrm{reduziert}},\ \text{Positionsgrenze},\ \dfrac{\text{Stressbudget}}{\text{Stressverlust}+c}\right)\end{aligned}`,
 'portfolio-discrete':String.raw`\max_{w}\ \sum_jp_j\ln\!\left[1+r+\sum_iw_i(R_{j,i}-c_i-r)\right]`,
 'portfolio-continuous':String.raw`\begin{aligned}g(w)&=r+w^{\mathsf T}\alpha-\dfrac{1}{2}w^{\mathsf T}\Sigma w\\\Sigma_{ij}&=\sigma_i\sigma_j\rho_{ij}\\\nabla g&=\alpha-\Sigma w=0\quad\Longrightarrow\quad w^*=\Sigma^{-1}\alpha\end{aligned}`
};
