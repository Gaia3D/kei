package kei.service;

import java.util.List;

import kei.domain.layer.Layer;

public interface LayerService {

    /**
    * layer 목록
    * @return
    */
    List<Layer> getListLayer(Layer layer);
    
}
