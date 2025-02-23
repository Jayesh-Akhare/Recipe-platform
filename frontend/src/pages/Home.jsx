import React from 'react';
import Background from '../components/Background';

const Home = () => {
  return (
    <div>
      <img src="/360_F_899953894_onQeJbtFszoYuUPd79pYnbYmXFg7zLiE.jpg" className="img-fluid w-100 pt-1" alt="Banner" />
      <Background />

      {/* Cards Container */}
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image2.png" className="card-img-top" alt="Veg Recipes" />
              <div className="card-body">
                <h5 className="card-title">Veg Recipes</h5>
                <p className="card-text">Delicious vegetarian recipes for a healthy lifestyle.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image3.png" className="card-img-top" alt="Card title" />
              <div className="card-body">
                <h5 className="card-title">Tandoor Biryani</h5>
                <p className="card-text">A flavorful and aromatic rice dish infused with smoky tandoori spices, tender marinated meat or vegetables, and fragrant basmati rice, cooked to perfection for a rich and satisfying meal</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image5.png" className="card-img-top" alt="Card title" />
              <div className="card-body">
                <h5 className="card-title">Zesty Avocado Salad</h5>
                <p className="card-text">A refreshing salad with avocado, lime, and a hint of spice.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image4.png" className="card-img-top" alt="Card title" />
              <div className="card-body">
                <h5 className="card-title">Chicken Curry</h5>
                <p className="card-text"> A rich and flavorful dish featuring tender chicken simmered in a fragrant blend of spices, tomatoes, and creamy sauce, creating a perfect balance of heat and aroma for a comforting and satisfying meal.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
