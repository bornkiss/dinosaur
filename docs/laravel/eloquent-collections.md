# Eloquent：集合

## 简介

Eloquent 返回的所有多结果集都是 `Illuminate\Database\Eloquent\Collection` 对象的实例，

默认情况下 Eloquent 返回的都是一个 `Illuminate\Database\Eloquent\Collection` 对象的实例，包括通过 `get` 方法检索或通过访问关联关系获取到的结果。Eloquent 的集合对象继承了 Laravel 的 [集合基类](/docs/laravel/collections)，因此它自然也继承了数十种能优雅地处理 Eloquent 模型底层数组的方法。

当然，所有的集合都可以作为迭代器，可以就像简单的 PHP 数组一样来遍历它们：

    $users = App\User::where('active', 1)->get();

    foreach ($users as $user) {
        echo $user->name;
    }

然而，集合比数组更加强大，它通过更直观的接口暴露出可链式调用的 map/reduce 等操作。举个例子，我们要删除模型中所有未激活的并收集剩余用户的名字：

    $users = App\User::where('active', 1)->get();

    $names = $users->reject(function ($user) {
        return $user->active === false;
    })
    ->map(function ($user) {
        return $user->name;
    });

> {note} 大多数 Eloquent 集合方法会返回新的 Eloquent 集合实例，但是 `pluck`, `keys`, `zip`, `collapse`, `flatten` 和 `flip` 方法除外，它们会返回 [集合基类](/docs/laravel/collections) 实例。同样，如果 `map` 操作返回的集合不包含任何 Eloquent 模型，那么它会被自动转换成集合基类。



## 可用的方法

### 集合基类

所有 Eloquent 集合都继承了基础的 [Laravel 集合](/docs/laravel/collections) 对象。因此，它们也继承了所有集合基类提供的强大的方法：

```css
<style>
    #collection-method-list > p {
        column-count: 3; -moz-column-count: 3; -webkit-column-count: 3;
        column-gap: 2em; -moz-column-gap: 2em; -webkit-column-gap: 2em;
    }

    #collection-method-list a {
        display: block;
    }
</style>
```css

<div id="collection-method-list" markdown="1">

[all](/docs/laravel/collections#method-all)
[average](/docs/laravel/collections#method-average)
[avg](/docs/laravel/collections#method-avg)
[chunk](/docs/laravel/collections#method-chunk)
[collapse](/docs/laravel/collections#method-collapse)
[combine](/docs/laravel/collections#method-combine)
[contains](/docs/laravel/collections#method-contains)
[containsStrict](/docs/laravel/collections#method-containsstrict)
[count](/docs/laravel/collections#method-count)
[diff](/docs/laravel/collections#method-diff)
[diffKeys](/docs/laravel/collections#method-diffkeys)
[each](/docs/laravel/collections#method-each)
[every](/docs/laravel/collections#method-every)
[except](/docs/laravel/collections#method-except)
[filter](/docs/laravel/collections#method-filter)
[first](/docs/laravel/collections#method-first)
[flatMap](/docs/laravel/collections#method-flatmap)
[flatten](/docs/laravel/collections#method-flatten)
[flip](/docs/laravel/collections#method-flip)
[forget](/docs/laravel/collections#method-forget)
[forPage](/docs/laravel/collections#method-forpage)
[get](/docs/laravel/collections#method-get)
[groupBy](/docs/laravel/collections#method-groupby)
[has](/docs/laravel/collections#method-has)
[implode](/docs/laravel/collections#method-implode)
[intersect](/docs/laravel/collections#method-intersect)
[isEmpty](/docs/laravel/collections#method-isempty)
[isNotEmpty](/docs/laravel/collections#method-isnotempty)
[keyBy](/docs/laravel/collections#method-keyby)
[keys](/docs/laravel/collections#method-keys)
[last](/docs/laravel/collections#method-last)
[map](/docs/laravel/collections#method-map)
[mapWithKeys](/docs/laravel/collections#method-mapwithkeys)
[max](/docs/laravel/collections#method-max)
[median](/docs/laravel/collections#method-median)
[merge](/docs/laravel/collections#method-merge)
[min](/docs/laravel/collections#method-min)
[mode](/docs/laravel/collections#method-mode)
[nth](/docs/laravel/collections#method-nth)
[only](/docs/laravel/collections#method-only)
[partition](/docs/laravel/collections#method-partition)
[pipe](/docs/laravel/collections#method-pipe)
[pluck](/docs/laravel/collections#method-pluck)
[pop](/docs/laravel/collections#method-pop)
[prepend](/docs/laravel/collections#method-prepend)
[pull](/docs/laravel/collections#method-pull)
[push](/docs/laravel/collections#method-push)
[put](/docs/laravel/collections#method-put)
[random](/docs/laravel/collections#method-random)
[reduce](/docs/laravel/collections#method-reduce)
[reject](/docs/laravel/collections#method-reject)
[reverse](/docs/laravel/collections#method-reverse)
[search](/docs/laravel/collections#method-search)
[shift](/docs/laravel/collections#method-shift)
[shuffle](/docs/laravel/collections#method-shuffle)
[slice](/docs/laravel/collections#method-slice)
[sort](/docs/laravel/collections#method-sort)
[sortBy](/docs/laravel/collections#method-sortby)
[sortByDesc](/docs/laravel/collections#method-sortbydesc)
[splice](/docs/laravel/collections#method-splice)
[split](/docs/laravel/collections#method-split)
[sum](/docs/laravel/collections#method-sum)
[take](/docs/laravel/collections#method-take)
[tap](/docs/laravel/collections#method-tap)
[toArray](/docs/laravel/collections#method-toarray)
[toJson](/docs/laravel/collections#method-tojson)
[transform](/docs/laravel/collections#method-transform)
[union](/docs/laravel/collections#method-union)
[unique](/docs/laravel/collections#method-unique)
[uniqueStrict](/docs/laravel/collections#method-uniquestrict)
[values](/docs/laravel/collections#method-values)
[when](/docs/laravel/collections#method-when)
[where](/docs/laravel/collections#method-where)
[whereStrict](/docs/laravel/collections#method-wherestrict)
[whereIn](/docs/laravel/collections#method-wherein)
[whereInStrict](/docs/laravel/collections#method-whereinstrict)
[whereNotIn](/docs/laravel/collections#method-wherenotin)
[whereNotInStrict](/docs/laravel/collections#method-wherenotinstrict)
[zip](/docs/laravel/collections#method-zip)

</div>


## 自定义集合


如果你需要在自己的扩展方法中使用自定义的 `Collection` 对象，可以在你自己的模型中重写 `newCollection` 方法：

    <?php

    namespace App;

    use App\CustomCollection;
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        /**
         * 创建一个新的 Eloquent 集合实例对象。
         *
         * @param  array  $models
         * @return \Illuminate\Database\Eloquent\Collection
         */
        public function newCollection(array $models = [])
        {
            return new CustomCollection($models);
        }
    }

一旦你定义了 `newCollection` 方法，任何时候都可以在 Eloquent 返回的模型的 `Collection` 实例中获取你的自定义集合实例。如果你想要在应用程序的每个模型中使用自定义集合，则应该在所有的模型继承的模型基类中重写 `newCollection` 方法。

## 译者署名

| 用户名 | 头像 | 职能 | 签名 |
| --- | --- | --- | --- |
| [@springjk](https://laravel-china.org/users/4550) | <img class="avatar-66 rm-style" src="https://dn-phphub.qbox.me/uploads/avatars/4550_1464580958.png?imageView2/1/w/100/h/100" /> | 翻译 | 再怎么说我也是我西北一匹狼 |


--- 

> {note} 欢迎任何形式的转载，但请务必注明出处，尊重他人劳动共创开源社区。
> 
> 转载请注明：本文档由 Laravel China 社区 [laravel-china.org](https://laravel-china.org) 组织翻译，详见 [翻译召集帖](https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation)。
> 
> 文档永久地址： https://d.laravel-china.org