import * as React from 'react';
import { useState } from 'react';
import './SearchLayout.scss';

export const SearchLayout = ():JSX.Element =>  {
  const [xaas, isXaas] = useState(false);
  const [tag, isTag] = useState(false);

  const handleTagClick = () => isTag(!tag)
  const handleXaasClick = () => isXaas(!xaas)

  return (
    <div className="search">
      <div className="search__textBox">
        <form>
          <input type="text" placeholder="検索" />
          <input type="submit" name="" value="Search" />
        </form> 
      </div>

      <button onClick={handleXaasClick}>Select XaaS</button>
      {xaas && (
        <div>
          <label className="search__checkaas">
            <input type="checkbox" /> SaaS
          </label>
          <label className="search__checkaas">
            <input type="checkbox" /> PaaS
          </label>
          <label className="search__checkaas">
            <input type="checkbox" /> IaaS
          </label>
        </div>
      )}

      <button onClick={handleTagClick}>select Tag</button>
      {tag && (
        <div>
          <input type="checkbox" />tag1
          <input type="checkbox" />tag1
          <input type="checkbox" />tag1
          <input type="checkbox" />tag1
          <input type="checkbox" />tag1
          <input type="checkbox" />tag1
          <input type="checkbox" />tag1
        </div>
      )}
    </div>
  )
}